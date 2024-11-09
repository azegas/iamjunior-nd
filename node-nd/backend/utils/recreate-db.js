// recreate-db.js is used to recreate the database from scratch
// it deletes all categories, businesses, bookings, and users and recreates them with sample data
// useful when developing locally
// run this file with "node recreate-db.js"

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const bcrypt = require('bcryptjs');

const { CategoryModel } = require('../api/categories/model');
const { BusinessModel } = require('../api/businesses/model');
const { BookingModel } = require('../api/bookings/model');
const { UserModel } = require('../api/auth/model');

const categories = require('./sample-data').categories;
const businesses = require('./sample-data').businesses;
const users = require('./sample-data').users;

async function connectToDB() {
  if (!process.env.DB_CONNECTION_STRING) {
    // eslint-disable-next-line no-console
    console.error(
      'Error: DB_CONNECTION_STRING environment variable is not set.',
    );
    process.exit(1); // Exit with an error code
  }

  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    // eslint-disable-next-line no-console
    console.log('Connected to the database successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit with an error code
  }
}

async function disconnectFromDB() {
  try {
    await mongoose.connection.close();
    // eslint-disable-next-line no-console
    console.log('Disconnected from the database successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error disconnecting from the database:', error);
  }
}

async function recreateCategories() {
  try {
    await CategoryModel.deleteMany({});
    // eslint-disable-next-line no-console
    console.log('Categories deleted successfully');

    const createdCategories = await CategoryModel.insertMany(categories);
    // eslint-disable-next-line no-console
    console.log('Categories recreated successfully');
    return createdCategories;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error recreating categories:', error);
  }
}

async function recreateBusinesses(createdCategories) {
  try {
    await BusinessModel.deleteMany({});
    // eslint-disable-next-line no-console
    console.log('Businesses deleted successfully');

    // Map the business categories to their corresponding IDs
    const businessesWithCategoryId = businesses.map((business) => {
      const category = createdCategories.find(
        (category) => category.name === business.category,
      );
      return { ...business, category: category._id };
    });

    await BusinessModel.insertMany(businessesWithCategoryId);
    // eslint-disable-next-line no-console
    console.log('Businesses recreated successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error recreating businesses:', error);
  }
}

async function deleteBookings() {
  try {
    await BookingModel.deleteMany({});
    // eslint-disable-next-line no-console
    console.log('Bookings deleted successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error recreating bookings:', error);
  }
}

async function deleteUsers() {
  try {
    await UserModel.deleteMany({});
    // eslint-disable-next-line no-console
    console.log('Users deleted successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error recreating users:', error);
  }
}

async function createUsers() {
  try {
    if (users.length > 0) {
      // Encrypt user passwords before inserting, otherwise the passwords will be stored in plain text and when logging in,
      // the passwords will be attempted to be decrypted with bcryptjs which will fail and throw an error
      const encryptedUsers = users.map((user) => ({
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      }));
      const createdUsers = await UserModel.insertMany(encryptedUsers);
      // eslint-disable-next-line no-console
      console.log(`Users recreated successfully`);
      return createdUsers;
    } else {
      // eslint-disable-next-line no-console
      console.error('No user data found to create users');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating users:', error);
  }
}

async function createRandomBookingsForUsers() {
  try {
    // Fetch all created users from the database
    const createdUsers = await UserModel.find();

    if (createdUsers.length) {
      // Fetch all businesses from the database
      const businesses = await BusinessModel.find();
      if (!businesses.length) {
        // eslint-disable-next-line no-console
        console.error(
          'No businesses found in the database to create bookings for.',
        );
        return;
      }

      for (const user of createdUsers) {
        for (let i = 0; i < 5; i++) {
          // Select a random business
          const randomBusiness =
            businesses[Math.floor(Math.random() * businesses.length)];

          // Create a new booking
          const randomBooking = new BookingModel({
            businessId: randomBusiness._id, // MongoDB ID of the business
            date: `2023-01-0${i + 1}`, // Generate dates as '2023-01-01', '2023-01-02', etc.
            time: '10:00', // Sample booking time
            userEmail: user.email,
            userName: user.username,
            status: 'pending', // Default status
          });

          // Save the booking to the database
          await randomBooking.save();
        }
      }
      // eslint-disable-next-line no-console
      console.log('Bookings created successfully');
    } else {
      // eslint-disable-next-line no-console
      console.error('No users found to create random bookings');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating random bookings:', error);
  }
}

async function main() {
  await connectToDB();
  const createdCategories = await recreateCategories();
  await recreateBusinesses(createdCategories);
  await deleteBookings();
  await deleteUsers();
  await createUsers();
  await createRandomBookingsForUsers();
  await disconnectFromDB();
  process.exit(0); // Exit process when done
}

main();

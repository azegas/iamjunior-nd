const mongoose = require('mongoose');

const connectToDB = async () => {
  if (!process.env.DB_CONNECTION_STRING) {
    throw new Error('DB_CONNECTION_STRING environment variable is not set.');
  }

  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    // eslint-disable-next-line no-console
    console.log('Connected to the database successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error connecting to the database:');
    throw error; // Rethrow the error to handle it in the main file
  }
};

module.exports = {
  connectToDB,
};

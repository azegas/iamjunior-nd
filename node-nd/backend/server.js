const express = require('express');
require('dotenv').config();
const app = express();
const { swaggerMiddleware } = require('./middlewares/swaggerMiddleware');
const { globalMiddlewares } = require('./middlewares/globalMiddlewares');
const { connectToDB } = require('./utils/db');

globalMiddlewares(app);
swaggerMiddleware(app);

// ----------------------------------------------------------------
// ROUTES
// ----------------------------------------------------------------

// TODO move routes to separate file

const { categoriesRouter } = require('./api/categories/routes');
const { businessesRouter } = require('./api/businesses/routes');
const { bookingsRouter } = require('./api/bookings/routes');
const { authRouter } = require('./api/auth/routes');

// middleware to handle the routes. here we define the route prefix
app.use('/api/categories', categoriesRouter);
app.use('/api/businesses', businessesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/auth', authRouter);

// ----------------------------------------------------------------
// DATABASE CONNECTION & SERVER LAUNCH
// ----------------------------------------------------------------

const startServer = async () => {
  try {
    await connectToDB(); // Connect to the database
    // if connection is successful, start the server
    app.listen(process.env.API_PORT, () => {
      process.env.NODE_ENV === 'production'
        ? console.log(`Server is running on ${process.env.API_HOST_PROD}`)
        : console.log(
            `Server is running on ${process.env.API_PROTOCOL_LOCAL}://${process.env.API_HOST_LOCAL}:${process.env.API_PORT_LOCAL}`,
          );
    });
  } catch {
    // eslint-disable-next-line no-console
    console.error('Failed to start the server:');
  }
};

startServer();

const express = require('express');

const { getBookings } = require('./queries/get-bookings');
const {
  getBookingsByIdAndEmail,
} = require('./queries/get-bookings-by-id-and-email');
const { postBooking } = require('./mutations/post-booking');
const { deleteBooking } = require('./mutations/delete-booking');

const bookingsRouter = express.Router();

bookingsRouter.get('/', getBookings);
bookingsRouter.get('/:businessId/email/:email', getBookingsByIdAndEmail);
bookingsRouter.post('/', postBooking);
bookingsRouter.delete('/:id', deleteBooking);

module.exports = {
  bookingsRouter,
};

import express from 'express';

import { getBookings } from './queries/get-bookings';
import { getBookingsByIdAndEmail } from './queries/get-bookings-by-id-and-email';
import { postBooking } from './mutations/post-booking';
import { deleteBooking } from './mutations/delete-booking';
import { getBookingsByUserEmail } from './queries/get-bookings-by-user-email';

const bookingsRouter = express.Router();

bookingsRouter.get('/', getBookings);
bookingsRouter.get('/:businessId/email/:email', getBookingsByIdAndEmail);
bookingsRouter.get('/email/:email', getBookingsByUserEmail);
bookingsRouter.post('/', postBooking);
bookingsRouter.delete('/:id', deleteBooking);

export { bookingsRouter };

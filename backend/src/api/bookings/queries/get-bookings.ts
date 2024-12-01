import { BookingModel } from '../bookings-model';
import { Request, Response } from 'express';

/*
http://localhost:3000/api/bookings
*/

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: A list of bookings
 *       404:
 *         description: No bookings found
 */

async function getBookings(req: Request, res: Response) {
  try {
    const bookings = await BookingModel.find().populate('businessId');
    if (bookings.length === 0) {
      res.status(404).json({ success: false, message: 'No bookings found.' });
    } else {
      res.json(bookings);
    }
  } catch {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

export { getBookings };

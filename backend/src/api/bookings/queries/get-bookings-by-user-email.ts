import { BookingModel } from '../bookings-model';
import { Request, Response } from 'express';

/*
http://localhost:3000/api/bookings/email/:email
http://localhost:3000/api/bookings/user@example.com
*/

/**
 * @swagger
 * /api/bookings/email/{email}:
 *   get:
 *     summary: Get bookings by email
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: The email of the user
 *     responses:
 *       200:
 *         description: A list of bookings
 */

async function getBookingsByUserEmail(req: Request, res: Response) {
  const email = req.params.email;

  try {
    const bookings = await BookingModel.find({
      userEmail: email,
    }).populate('businessId');
    if (bookings.length > 0) {
      res.json(bookings);
    } else {
      res.status(404).json({ message: 'No bookings found for this email' });
    }
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export { getBookingsByUserEmail };

import { BookingModel } from '../bookings-model';
import { Request, Response } from 'express';

/*
Example API endpoints for deleting a booking by ID:
  - http://localhost:3000/api/bookings/:id
  - http://localhost:3000/api/bookings/1
*/

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the booking
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 */

async function deleteBooking(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ success: false, message: 'Id is required.' });
    return;
  }

  try {
    // Find and delete the booking with the specified 'id'
    const result = await BookingModel.findByIdAndDelete(id);

    // Check if the booking with the specified id exists
    if (!result) {
      // If not found, return a 404 Not Found error with a message
      res.status(404).json({ success: false, message: 'Booking not found.' });
    } else {
      // If found, return a 200 OK response with a success message
      res.status(200).json({ success: true, message: 'Booking deleted successfully.' });
    }
  } catch (error) {
    if (error instanceof Error && error.name === 'CastError') {
      console.error(`Booking with id ${id} does not exist.`);
      res.status(500).json({
        success: false,
        message: `Booking with id ${id} does not exist.`,
      });
    } else {
      console.error('Error deleting booking:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
}

export { deleteBooking };

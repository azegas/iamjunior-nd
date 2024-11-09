const { BookingModel } = require('../model');

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

async function deleteBooking(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ success: false, message: 'Id is required.' });
  }

  try {
    // Find and delete the booking with the specified 'id'
    const result = await BookingModel.findByIdAndDelete(id);

    // Check if the booking with the specified id exists
    if (!result) {
      // If not found, return a 404 Not Found error with a message
      return res
        .status(404)
        .json({ success: false, message: 'Booking not found.' });
    }

    res
      .status(200)
      .json({ success: true, message: 'Booking deleted successfully.' });
  } catch {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

module.exports = {
  deleteBooking,
};

const { BookingModel } = require('../model');

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

async function getBookings(req, res) {
  try {
    const bookings = await BookingModel.find();
    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'No bookings found.' });
    }
    res.json(bookings);
  } catch {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

module.exports = {
  getBookings,
};

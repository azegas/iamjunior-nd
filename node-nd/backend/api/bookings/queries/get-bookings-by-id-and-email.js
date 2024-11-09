const { BookingModel } = require('../model');

/*
http://localhost:3000/api/bookings/:businessId/email/:email
http://localhost:3000/api/bookings/1/email/user@example.com
*/

/**
 * @swagger
 * /api/bookings/{businessId}/email/{email}:
 *   get:
 *     summary: Get bookings by business ID and email
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: businessId
 *         required: true
 *         description: The ID of the business
 *       - in: path
 *         name: email
 *         required: true
 *         description: The email of the user
 *     responses:
 *       200:
 *         description: A list of bookings
 */

async function getBookingsByIdAndEmail(req, res) {
  const businessId = req.params.businessId;
  const email = req.params.email;

  try {
    const bookings = await BookingModel.find({
      businessId: businessId,
      userEmail: email,
    });
    if (bookings.length > 0) {
      res.json(bookings);
    } else {
      res
        .status(404)
        .json({ message: 'No bookings found for this business and email' });
    }
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getBookingsByIdAndEmail,
};

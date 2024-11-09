const { BookingModel } = require('../model');

/*
http://localhost:3000/api/bookings

{
    "businessId": "1",
    "date": "2023-01-01",
    "time": "10:00",
    "userEmail": "user@example.com",
    "userName": "User Name",
    "status": "pending"
}
*/

// TODO user should be from available users, not random

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               businessId:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               userEmail:
 *                 type: string
 *               userName:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Invalid input
 */

const validateRequiredFields = (fields) => {
  const { businessId, date, time, userEmail, userName, status } = fields;
  if (!businessId || !date || !time || !userEmail || !userName || !status) {
    return 'Required fields: businessId, date, time, userEmail, userName, and status.';
  }
  return null;
};

const validateFieldTypes = (fields) => {
  const { businessId, date, time, userEmail, userName, status } = fields;
  if (
    typeof businessId !== 'string' ||
    typeof date !== 'string' ||
    typeof time !== 'string' ||
    typeof userEmail !== 'string' ||
    typeof userName !== 'string' ||
    typeof status !== 'string'
  ) {
    return 'All fields should be strings.';
  }
  if (!userEmail.includes('@')) {
    return 'userEmail should contain @.';
  }
  return null;
};

const postBooking = async (req, res) => {
  const { businessId, date, time, userEmail, userName, status } = req.body;

  // Validate required fields
  const requiredFieldsError = validateRequiredFields(req.body);
  if (requiredFieldsError) {
    return res
      .status(400)
      .json({ success: false, message: requiredFieldsError });
  }

  // Validate field types
  const fieldTypesError = validateFieldTypes(req.body);
  if (fieldTypesError) {
    return res.status(400).json({ success: false, message: fieldTypesError });
  }

  const newBooking = new BookingModel({
    businessId,
    date,
    time,
    userEmail,
    userName,
    status,
  });

  try {
    await newBooking.save();
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: newBooking,
    });
  } catch {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { postBooking };

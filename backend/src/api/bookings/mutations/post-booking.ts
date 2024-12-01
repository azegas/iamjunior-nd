import { BookingModel } from '../bookings-model';
import { Request, Response } from 'express';
import { Booking } from '../bookings-types';

/*
http://localhost:3000/api/bookings

{
    "businessId": "1",
    "date": "2023-01-01",
    "time": "10:00",
    "userEmail": "user@example.com",
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
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Invalid input
 */

const validateRequiredFields = (fields: Booking) => {
  const { businessId, date, time, userEmail, status } = fields;
  if (!businessId || !date || !time || !userEmail || !status) {
    return 'Required fields: businessId, date, time, userEmail, and status.';
  }
  return null;
};

const validateFieldTypes = (fields: Booking) => {
  const { businessId, date, time, userEmail, status } = fields;
  if (
    typeof businessId !== 'string' ||
    typeof date !== 'string' ||
    typeof time !== 'string' ||
    typeof userEmail !== 'string' ||
    typeof status !== 'string'
  ) {
    return 'All fields should be strings.';
  }
  if (!userEmail.includes('@')) {
    return 'userEmail should contain @.';
  }
  return null;
};

const postBooking = async (req: Request, res: Response): Promise<void> => {
  const { businessId, date, time, userEmail, status } = req.body;

  // Validate required fields
  const requiredFieldsError = validateRequiredFields(req.body);
  if (requiredFieldsError) {
    res.status(400).json({ success: false, message: requiredFieldsError });
    return;
  }

  // Validate field types
  const fieldTypesError = validateFieldTypes(req.body);
  if (fieldTypesError) {
    res.status(400).json({ success: false, message: fieldTypesError });
    return;
  }

  const newBooking = new BookingModel({
    businessId,
    date,
    time,
    userEmail,
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

export { postBooking };

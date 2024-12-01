import { BusinessModel } from '../businesses-model';
import { CategoryModel } from '../../categories/categories-model';
import { Request, Response } from 'express';
import { Business } from '../businesses-types';

/*
http://localhost:3000/api/businesses/:id
http://localhost:3000/api/businesses/1

{
    "name": "New Name",
    "description": "New Description",
    "address": "New Address",
    "worker": "New Worker",
    "category": "New Category",
    "contactPerson": "New Contact Person",
    "email": "new.email@business.com",
    "images": ["new-image1.jpg", "new-image2.jpg"]
}
*/

/**
 * @swagger
 * /api/businesses/{id}:
 *   put:
 *     summary: Update a business by ID
 *     tags: [Businesses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the business
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *               worker:
 *                 type: string
 *               category:
 *                 type: string
 *               contactPerson:
 *                 type: string
 *               email:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Business updated successfully
 *       400:
 *         description: Invalid input
 */

const putBusiness = async (req: Request, res: Response): Promise<void> => {
  const businessId = req.params.id;

  try {
    const business = await BusinessModel.findById(businessId);
    if (!business) {
      res.status(404).json({ message: 'Business with such id does not exist' });
      return;
    }

    const allowedFields = [
      'name',
      'description',
      'address',
      'worker',
      'category',
      'contactPerson',
      'email',
      'images',
    ];

    // Extract fields from req.body and separate known from unknown
    const providedFields = Object.keys(req.body);
    const unknownFields = providedFields.filter((field) => !allowedFields.includes(field));

    // Check for any unknown fields
    if (unknownFields.length > 0) {
      res.status(400).json({ message: 'Unknown fields provided', unknownFields });
      return;
    }

    // Check if there’s at least one valid field to update
    const hasValidFields = providedFields.some(
      (field) => allowedFields.includes(field) && req.body[field],
    );
    if (!hasValidFields) {
      res.status(400).json({ message: 'Please provide at least one valid field to update' });
      return;
    }

    // Validate category against existing categories
    const categories = await CategoryModel.find();
    const validCategories = categories.map((category) => category._id.toString());
    if (req.body.category && !validCategories.includes(req.body.category)) {
      res.status(400).json({ message: 'Invalid category provided' });
      return;
    }

    // Update business fields only if they are provided and of the correct type
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        if (field === 'images') {
          if (!Array.isArray(req.body[field])) {
            res.status(400).json({ message: 'Images should be an array' });
            return;
          }
          if (!req.body[field].every((image: string) => typeof image === 'string')) {
            res.status(400).json({ message: 'All images should be strings' });
            return;
          }
        } else {
          if (field === 'email' && !req.body[field].includes('@')) {
            res.status(400).json({ message: 'Email should contain @' });
            return;
          }
          if (typeof req.body[field] !== 'string') {
            res.status(400).json({ message: `${field} should be a string` });
            return;
          }
        }
        // (business as Business)[field] = req.body[field];
        (business as any)[field] = req.body[field];
      }
    });

    // Save the updated business
    await business.save();

    // Return success message with updated business data
    res.json({ message: 'Business updated', business });
  } catch {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export { putBusiness };

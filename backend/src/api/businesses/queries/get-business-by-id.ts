import { BusinessModel } from '../businesses-model';
import { Request, Response } from 'express';

/*
http://localhost:3000/api/businesses/:id
http://localhost:3000/api/businesses/1
*/

/**
 * @swagger
 * /api/businesses/{id}:
 *   get:
 *     summary: Get a business by ID
 *     tags: [Businesses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the business
 *     responses:
 *       200:
 *         description: A business
 */

const getBusinessById = async (req: Request, res: Response): Promise<void> => {
  const businessId = req.params.id;
  try {
    const business = await BusinessModel.findById(businessId).populate('category');
    if (business) {
      res.json(business);
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export { getBusinessById };

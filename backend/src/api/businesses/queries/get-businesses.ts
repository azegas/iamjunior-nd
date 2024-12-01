import { BusinessModel } from '../businesses-model';
import { Request, Response } from 'express';

/*
http://localhost:3000/api/businesses
*/

/**
 * @swagger
 * /api/businesses:
 *   get:
 *     summary: Get all businesses
 *     tags: [Businesses]
 *     responses:
 *       200:
 *         description: A list of businesses
 */

const getBusinesses = async (req: Request, res: Response): Promise<void> => {
  try {
    const businesses = await BusinessModel.find().populate('category');
    // const businesses = await BusinessModel.find();
    if (businesses.length === 0) {
      res.status(404).json({ success: false, message: 'No businesses found.' });
    } else {
      res.json(businesses);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

export { getBusinesses };

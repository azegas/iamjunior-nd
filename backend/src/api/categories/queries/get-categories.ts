import { CategoryModel } from '../categories-model';
import { Request, Response } from 'express';

/*
http://localhost:3000/api/categories
*/

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of categories
 */

const getCategories = async (req: Request, res: Response): Promise<any> => {
  try {
    const categories = await CategoryModel.find();

    if (categories.length === 0) {
      return res.status(404).json({ success: false, message: 'No categories found.' });
    }

    return res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

export { getCategories };

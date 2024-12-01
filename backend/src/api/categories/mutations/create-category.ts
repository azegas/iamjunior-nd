import { CategoryModel } from '../categories-model';
import { Request, Response } from 'express';
import { Category } from '../categories-types';

/*
http://localhost:3000/api/categories

{
    "name": "labukas",
    "color": "pink",
    "icon": "https://google.com"
}
*/

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               color:
 *                 type: string
 *               icon:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Category already exists
 */

// Helper function to validate required fields
// (partial makes all properties optional. This avoids TypeScript errors when dealing with partially defined objects during validation.)
const validateRequiredFields = ({ name, color, icon }: Partial<Category>): string | null => {
  if (!name || !color || !icon) {
    return 'Please provide name, color, and icon.';
  }
  return null;
};

// Helper function to validate field types and formats
const validateFieldTypes = ({ name, color, icon }: Partial<Category>): string | null => {
  if (
    typeof name !== 'string' ||
    typeof color !== 'string' ||
    typeof icon !== 'string' ||
    !icon.startsWith('http')
  ) {
    return 'Name, color, and icon should be strings, and icon should start with "http".';
  }
  return null;
};

// Main function to create a category
const createCategory = async (req: Request, res: Response): Promise<void> => {
  const { name, color, icon } = req.body as Category;

  // Validate required fields
  const requiredFieldsError = validateRequiredFields(req.body);
  if (requiredFieldsError) {
    res.status(400).json({ success: false, message: requiredFieldsError });
  }

  // Validate field types and formats
  const fieldTypesError = validateFieldTypes(req.body);
  if (fieldTypesError) {
    res.status(400).json({ success: false, message: fieldTypesError });
  }

  try {
    // Check for existing category by name
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      res.status(409).json({
        success: false,
        message: `Category with name '${name}' already exists.`,
      });
    }

    // Create and save new category
    const newCategory = new CategoryModel({ name, color, icon });
    const category = await newCategory.save();

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      category,
    });
  } catch (error: any) {
    // Handle duplicate key error (MongoDB error code 11000)
    if (error.code === 11000) {
      res.status(409).json({ success: false, message: 'Category already exists.' });
    }
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

export { createCategory };

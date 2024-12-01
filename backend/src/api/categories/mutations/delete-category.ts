import { CategoryModel } from '../categories-model';
import { Request, Response } from 'express';

/*
Example API endpoints for deleting a category by ID:
  - http://localhost:3000/api/categories/:id
  - http://localhost:3000/api/categories/1
*/

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: Category deleted successfully
 */

async function deleteCategory(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ success: false, message: 'Id is required.' });
    return;
  }

  try {
    // Find and delete the category with the specified 'id'
    const result = await CategoryModel.findByIdAndDelete(id);

    // Check if the category with the specified id exists
    if (!result) {
      // If not found, return a 404 Not Found error with a message
      res.status(404).json({ success: false, message: 'Category not found.' });
    } else {
      // If found, return a 200 OK response with a success message
      res.status(200).json({ success: true, message: 'Category deleted successfully.' });
    }
  } catch (error) {
    if (error instanceof Error && error.name === 'CastError') {
      console.error(`Category with id ${id} does not exist.`);
      res.status(500).json({
        success: false,
        message: `Category with id ${id} does not exist.`,
      });
    } else {
      console.error('Error deleting category:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
}

export { deleteCategory };

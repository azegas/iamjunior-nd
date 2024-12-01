import { BusinessModel } from '../businesses-model';
import { Request, Response } from 'express';

/*
Example API endpoints for deleting a business by ID:
  - http://localhost:3000/api/businesses/:id
  - http://localhost:3000/api/businesses/1
*/

/**
 * @swagger
 * /api/businesses/{id}:
 *   delete:
 *     summary: Delete a business by ID
 *     tags: [Businesses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the business
 *     responses:
 *       200:
 *         description: Business deleted successfully
 */

async function deleteBusiness(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ success: false, message: 'Id is required.' });
    return;
  }

  try {
    // Find and delete the business with the specified 'id'
    const result = await BusinessModel.findByIdAndDelete(id);

    // Check if the business with the specified id exists
    if (!result) {
      // If not found, return a 404 Not Found error with a message
      res.status(404).json({ success: false, message: 'Business not found.' });
    } else {
      // If found, return a 200 OK response with a success message
      res.status(200).json({ success: true, message: 'Business deleted successfully.' });
    }
  } catch (error) {
    if (error instanceof Error && error.name === 'CastError') {
      console.error(`Business with id ${id} does not exist.`);
      res.status(500).json({
        success: false,
        message: `Business with id ${id} does not exist.`,
      });
    } else {
      console.error('Error deleting business:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
}

export { deleteBusiness };

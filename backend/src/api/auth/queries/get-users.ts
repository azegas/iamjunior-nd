import { UserModel } from '../auth-model';
import { Request, Response } from 'express';

/* 
http://localhost:3000/api/auth/users
*/

/**
 * @swagger
 * /api/auth/users:
 *   get:
 *     summary: Get all users
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: List of users
 *       404:
 *         description: No users found
 */

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await UserModel.find();
  if (users.length === 0) {
    res.status(404).json({ message: 'No users found' });
    return;
  }
  res.status(200).json(users);
};

export { getUsers };

import { Request, Response } from 'express';
import { UserModel } from '../auth-model';
import { generateToken } from '../auth-token';
import { User } from '../auth-types';

/*
http://localhost:3000/api/auth/login

{
    "email": "user@example.com",
    "password": "password"
}
*/

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

// Login controller function
const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // Check if all required fields are provided
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: 'Required fields: email and password.',
    });
    return;
  }

  // Check if fields are of the correct type
  if (typeof email !== 'string' || typeof password !== 'string') {
    res.status(400).json({
      success: false,
      message: 'email and password should be strings.',
    });
    return;
  }

  try {
    // Check if user exists
    const existingUser: User | null = await UserModel.findOne({ email });
    if (!existingUser) {
      res.status(404).json({
        success: false,
        message: 'Invalid credentials.',
      });
      return;
    }

    // Check if user password is correct
    if (!(await existingUser.isCorrectPassword(password))) {
      res.status(401).json({ message: 'Incorrect email or password' });
      return;
    }

    // Generate JWT token
    const token = generateToken(existingUser._id.toString());

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      token,
      user: existingUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export { loginUser };

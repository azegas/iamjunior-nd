import { Request, Response } from 'express';
import { UserModel } from '../auth-model';
import { User } from '../auth-types';

/*
http://localhost:3000/api/auth/register

{
  "username": "aze",
  "email": "aze@gmail.com",
  "password": "test123"
}
*/

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Username already exists
 */

const validateFields = (username: string, email: string, password: string): string | null => {
  if (!username || !email || !password) {
    return 'Required fields: username, email, and password.';
  }
  if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return 'username, email, and password should be strings.';
  }
  return null;
};

const isValidEmail = (email: string): boolean => email.includes('@');

const checkExistingUsername = async (username: string): Promise<User | null> => {
  return await UserModel.findOne({ username });
};

const checkExistingEmail = async (email: string): Promise<User | null> => {
  return await UserModel.findOne({ email });
};

const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  // Validate fields
  const fieldError = validateFields(username, email, password);
  if (fieldError) {
    res.status(400).json({ success: false, message: fieldError });
    return;
  }

  // Validate email format
  if (!isValidEmail(email)) {
    res.status(400).json({ success: false, message: 'Invalid email format.' });
    return;
  }

  try {
    // Check for existing username
    if (await checkExistingUsername(username)) {
      res.status(409).json({ success: false, message: 'Username already exists.' });
      return;
    }

    // Check for existing email
    if (await checkExistingEmail(email)) {
      res.status(409).json({ success: false, message: 'Email already exists.' });
      return;
    }

    // Create new user
    const newUser = await UserModel.create({ username, email, password });
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export { registerUser };

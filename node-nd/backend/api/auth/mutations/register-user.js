const { UserModel } = require('../model');

/*
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

const validateFields = (username, email, password) => {
  if (!username || !email || !password) {
    return 'Required fields: username, email, and password.';
  }
  if (
    typeof username !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return 'username, email, and password should be strings.';
  }
  return null;
};

const isValidEmail = (email) => email.includes('@');

const checkExistingUsername = async (username) => {
  return await UserModel.findOne({ username });
};

const checkExistingEmail = async (email) => {
  return await UserModel.findOne({ email });
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate fields
  const fieldError = validateFields(username, email, password);
  if (fieldError) {
    return res.status(400).json({ success: false, message: fieldError });
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid email format.' });
  }

  try {
    // Check for existing username
    if (await checkExistingUsername(username)) {
      return res
        .status(409)
        .json({ success: false, message: 'Username already exists.' });
    }

    // Check for existing email
    if (await checkExistingEmail(email)) {
      return res
        .status(409)
        .json({ success: false, message: 'Email already exists.' });
    }

    // Create new user
    const newUser = await UserModel.create({ username, email, password });
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: newUser,
    });
  } catch {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { registerUser };

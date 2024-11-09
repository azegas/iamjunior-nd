const { UserModel } = require('../model');
const { generateToken } = require('../password');
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if all required fields are provided
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Required fields: email and password.',
    });
  }

  // Check if fields are of the correct type
  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'email and password should be strings.',
    });
  }

  try {
    // Check if user exists
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: 'Invalid credentials.',
      });
    }

    // Check if user password is correct
    const passwordIsCorrect = await existingUser.isCorrectPassword(password);
    if (!passwordIsCorrect) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials.',
      });
    }

    // Generate JWT token
    const token = generateToken(existingUser._id);

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      token,
      user: existingUser,
    });
  } catch {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {
  loginUser,
};

const { UserModel } = require('../model');
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

const getUsers = async (req, res) => {
  const users = await UserModel.find();
  if (users.length === 0) {
    return res.status(404).json({ message: 'No users found' });
  }
  res.status(200).json(users);
};

module.exports = {
  getUsers,
};

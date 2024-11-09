const { CategoryModel } = require('../model');

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

async function getCategories(req, res) {
  const categories = await CategoryModel.find();
  if (categories.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: 'No categories found.' });
  }
  res.json(categories);
}

module.exports = {
  getCategories,
};

const { BusinessModel } = require('../model');
const { CategoryModel } = require('../../categories/model');

/*
http://localhost:3000/api/businesses

{
    "name": "Fake Business Name",
    "description": "This is a fake business description.",
    "address": "123 Fake Street, Faketown, USA",
    "worker": "John Doe",
    "category": "cleaning",
    "contactPerson": "John Doe",
    "email": "john.doe@fakebusiness.com",
    "images": ["image1.jpg", "image2.jpg"]
}
*/

/**
 * @swagger
 * /api/businesses:
 *   post:
 *     summary: Create a new business
 *     tags: [Businesses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *               worker:
 *                 type: string
 *               category:
 *                 type: string
 *               contactPerson:
 *                 type: string
 *               email:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Business created successfully
 *       400:
 *         description: Invalid input
 */

// Helper function to validate required fields
const validateRequiredFields = (fields) => {
  const {
    name,
    description,
    address,
    worker,
    category,
    contactPerson,
    email,
    images,
  } = fields;
  if (
    !name ||
    !description ||
    !address ||
    !worker ||
    !category ||
    !contactPerson ||
    !email ||
    !images
  ) {
    return 'Required fields: name, description, address, worker, category, contactPerson, email, and images.';
  }
  return null;
};

// Helper function to validate field types
const validateFieldTypes = (fields) => {
  const { name, description, address, contactPerson, email, images } = fields;
  if (
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof address !== 'string' ||
    typeof contactPerson !== 'string' ||
    typeof email !== 'string' ||
    !email.includes('@') ||
    !Array.isArray(images)
  ) {
    return 'Name, description, address, contactPerson, and email should be strings, images should be an array, and email should contain @.';
  }
  return null;
};

// Helper function to check if category exists
const checkCategoryExists = async (categoryName) => {
  const categories = await CategoryModel.find();
  return categories.find(
    (cat) => cat.name.toLowerCase() === categoryName.toLowerCase(),
  );
};

// Main function
const postBusiness = async (req, res) => {
  const {
    name,
    description,
    address,
    worker,
    category,
    contactPerson,
    email,
    images,
  } = req.body;

  // Validate required fields
  const requiredFieldsError = validateRequiredFields(req.body);
  if (requiredFieldsError) {
    return res
      .status(400)
      .json({ success: false, message: requiredFieldsError });
  }

  // Validate field types
  const fieldTypesError = validateFieldTypes(req.body);
  if (fieldTypesError) {
    return res.status(400).json({ success: false, message: fieldTypesError });
  }

  // Check if category exists
  const categoryExists = await checkCategoryExists(category);
  if (!categoryExists) {
    return res.status(400).json({
      success: false,
      message: `Category '${category}' does not exist. Available categories are: ${await CategoryModel.distinct('name').join(', ')}.`,
    });
  }

  // Create and save new business
  const newBusiness = new BusinessModel({
    name,
    description,
    address,
    worker,
    category: categoryExists._id,
    contactPerson,
    email,
    images,
  });

  await newBusiness.save();

  res.status(201).json({
    success: true,
    message: 'Business created successfully',
    business: newBusiness,
  });
};

module.exports = { postBusiness };

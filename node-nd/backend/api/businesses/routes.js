const express = require('express');

const { getBusinesses } = require('./queries/get-businesses');
const { postBusiness } = require('./mutations/post-business');
const { getBusinessById } = require('./queries/get-business-by-id');
const { getBusinessByCategory } = require('./queries/get-business-by-category');
const { putBusiness } = require('./mutations/put-business-by-id');
const {
  getBusinessByIdAndDate,
} = require('./queries/get-business-bookings-by-id-and-booking-date');

const { authMiddleware } = require('../../middlewares/authMiddleware');

const businessesRouter = express.Router();

businessesRouter.get('/', getBusinesses);
businessesRouter.post('/', authMiddleware, postBusiness);
businessesRouter.get('/:id', getBusinessById);
businessesRouter.get('/category/:category', getBusinessByCategory);
businessesRouter.put('/:id', authMiddleware, putBusiness);
businessesRouter.get('/:id/bookings/date/:date', getBusinessByIdAndDate);

module.exports = {
  businessesRouter,
};

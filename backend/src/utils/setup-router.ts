import { categoriesRouter } from '../api/categories/categories-routes';
import { businessesRouter } from '../api/businesses/businesses-routes';
import { bookingsRouter } from '../api/bookings/bookings-routes';
import { authRouter } from '../api/auth/auth-routes';
import express from 'express';

export const setupRouter = (app: express.Application) => {
  app.use('/api/categories', categoriesRouter);
  app.use('/api/businesses', businessesRouter);
  app.use('/api/bookings', bookingsRouter);
  app.use('/api/auth', authRouter);
};

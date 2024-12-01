import express from 'express';

import { getCategories } from './queries/get-categories';
import { createCategory } from './mutations/create-category';
import { deleteCategory } from './mutations/delete-category';

const categoriesRouter = express.Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', createCategory);
categoriesRouter.delete('/:id', deleteCategory);

export { categoriesRouter };

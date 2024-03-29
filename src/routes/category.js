import express from 'express';
import { CategoryController } from '../controllers/index.js';

const CategoryRouter = express.Router();

// POST: /products -> Create a new product
CategoryRouter.post('/cate', CategoryController.createCategory);

export default CategoryRouter;
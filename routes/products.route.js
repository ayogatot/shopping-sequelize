import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from '../controllers/products.controller';
import { basicAuth } from '../middlewares';
const Router = express.Router();

Router.route('/').post(basicAuth, createProduct).get(getAllProducts);
Router.route('/:id')
  .get(getProductById)
  .put(basicAuth, updateProductById)
  .delete(basicAuth, deleteProductById);

module.exports = Router;

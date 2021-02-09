import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  productValidation,
} from '../controllers/products.controller';
import { basicAuth } from '../middlewares';
const Router = express.Router();

Router.route('/')
  .post(basicAuth, productValidation, createProduct)
  .get(getAllProducts);
Router.route('/:id')
  .get(getProductById)
  .put(basicAuth, productValidation, updateProductById)
  .delete(basicAuth, deleteProductById);

module.exports = Router;

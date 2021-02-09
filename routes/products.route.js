import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from '../controllers/products.controller';
const Router = express.Router();

Router.route('/').post(createProduct).get(getAllProducts);
Router.route('/:id')
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);

module.exports = Router;

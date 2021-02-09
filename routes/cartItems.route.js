import express from 'express';
import {
  createCartItem,
  updateQuantityCartItem,
  deleteItemFromCart,
} from '../controllers/cartItems.controller';
const Router = express.Router();

Router.route('/').post(createCartItem).put(updateQuantityCartItem);
Router.route('/:id').delete(deleteItemFromCart);

module.exports = Router;

import express from 'express';
import {
  createCartItem,
  updateQuantityCartItem,
  deleteItemFromCart,
  cartItemValidation,
} from '../controllers/cartItems.controller';
const Router = express.Router();

Router.route('/')
  .post(cartItemValidation, createCartItem)
  .put(cartItemValidation, updateQuantityCartItem);
Router.route('/:id').delete(deleteItemFromCart);

module.exports = Router;

import express from 'express';
import { createCartItem } from '../controllers/cartItems.controller';
const Router = express.Router();

Router.route('/').post(createCartItem);

module.exports = Router;

import express from 'express';
import { getCartByUserId } from '../controllers/carts.controller';
const Router = express.Router();

Router.route('/').get(getCartByUserId);

module.exports = Router;

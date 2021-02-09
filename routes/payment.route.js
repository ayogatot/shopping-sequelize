import express from 'express';
import { checkout, confirmation } from '../controllers/payment.controller';
const Router = express.Router();

Router.route('/checkout').get(checkout);
Router.route('/confirmation').get(confirmation);

module.exports = Router;

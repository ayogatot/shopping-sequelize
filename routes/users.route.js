import express from 'express';
import { getAllUsers, getUserById } from '../controllers/users.controller';
const Router = express.Router();

Router.route('/').get(getAllUsers);
Router.route('/:id').get(getUserById);

module.exports = Router;

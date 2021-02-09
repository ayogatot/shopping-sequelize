import express from 'express';
import { login, register } from '../controllers/auth.controller';
const Router = express.Router();

Router.post('/login', login);
Router.post('/register', register);

module.exports = Router;

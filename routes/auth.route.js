import express from 'express';
import {
  login,
  register,
  loginValidation,
  registerValidation,
} from '../controllers/auth.controller';
const Router = express.Router();

Router.post('/login', loginValidation, login);
Router.post('/register', registerValidation, register);

module.exports = Router;

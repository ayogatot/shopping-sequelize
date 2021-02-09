import jwt from 'jsonwebtoken';

import { sendResponse } from '../helpers';
import { Users } from '../models';

module.exports = {
  isAuthenticated: async (req, res, next) => {
    const token =
      req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (token === undefined || token === null) {
      return sendResponse(res, 500, 'Token is not found!', []);
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await Users.findOne({ where: { id: decoded.id } });

      if (!user) {
        return sendResponse(res, 500, 'Token is not valid!', []);
      }

      req.user = user;
      next();
    } catch (error) {
      sendResponse(res, 500, error, []);
    }
  },

  basicAuth: (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      const err = new Error('You are not authenticated');

      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      err.message = 'You are not authenticated';
      return res
        .status(401)
        .json({ status: 401, message: 'You are not authenticated' });
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64')
      .toString()
      .split(':');
    const username = auth[0];
    const password = auth[1];

    if (
      username === 'shoppingcart-admin' &&
      password === 'p@ssw0rd123d)OGVYH='
    ) {
      next();
    } else {
      const err = new Error('You are not authenticated');

      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return res
        .status(401)
        .json({ status: 401, message: 'You are not authenticated' });
    }
  },
};

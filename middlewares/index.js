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
};

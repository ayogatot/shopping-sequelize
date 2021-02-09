import jwt from 'jsonwebtoken';

import { Users } from '../models';
import { sendResponse, decrypt, encrypt } from '../helpers';

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await Users.findOne({ where: { email } });

      if (!user) {
        return sendResponse(res, 500, 'User is not found', []);
      }

      if (!(password === decrypt(user.password))) {
        return sendResponse(res, 500, 'Password not match', []);
      }

      const token = jwt.sign({ ...user }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });

      return sendResponse(res, 200, 'Successfully Login', {
        userId: user.id,
        token,
      });
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  register: async (req, res) => {
    const { email, password, name } = req.body;

    try {
      let _password = encrypt(password);
      const user = await Users.create({ email, password: _password, name });

      return sendResponse(res, 200, 'Successfully create new user', user);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },
};

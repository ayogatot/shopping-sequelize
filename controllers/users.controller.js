import { Users } from '../models';
import { sendResponse } from '../helpers';

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const user = await Users.findAll();

      if (!user) {
        return sendResponse(res, 500, 'User is not found', []);
      }

      return sendResponse(res, 200, 'Successfully get all Users', user);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Users.findOne({ where: { id } });

      if (!user) {
        return sendResponse(res, 500, 'User is not found', []);
      }

      return sendResponse(res, 200, 'Successfully get user by Id', user);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },
};

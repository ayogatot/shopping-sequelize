import { Carts, CartItems, Products } from '../models';
import { sendResponse } from '../helpers';

module.exports = {
  getCartByUserId: async (req, res) => {
    const { id } = req.user;
    try {
      let cart = await Carts.findOne({
        where: { userId: id, isCheckout: 0 },
        include: [
          {
            model: CartItems,
            include: [Products],
          },
        ],
      });

      if (!cart) {
        cart = await Carts.create({ userId: id });
      }

      return sendResponse(res, 200, 'Successfully get Cart by Id', cart);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },
};

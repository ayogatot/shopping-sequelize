import { Carts } from '../models';
import { sendResponse } from '../helpers';

module.exports = {
  getCartByUserId: async (req, res) => {
    const { id } = req.user;
    try {
      let cart = await Carts.findOne({
        where: { userId: id, isCheckout: 0 },
      });

      if (!cart) {
        cart = await Carts.create({ userId: id });
      }

      return sendResponse(res, 200, 'Successfully get Cart by Id', cart);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  //   updateProductById: async (req, res) => {
  //     const { id } = req.params;
  //     const { name, price, quantity } = req.body;

  //     try {
  //       const Cart = await Carts.findOne({ where: { id } });

  //       if (!Cart) {
  //         return sendResponse(res, 500, 'Cart Id is not found', []);
  //       }

  //       Cart.name = name;
  //       Cart.price = price;
  //       Cart.quantity = quantity;

  //       await Cart.save();

  //       return sendResponse(
  //         res,
  //         200,
  //         'Successfully update Cart by Id',
  //         Cart
  //       );
  //     } catch (error) {
  //       return sendResponse(res, 500, error, []);
  //     }
  //   },

  //   deleteProductById: async (req, res) => {
  //     const { id } = req.params;
  //     try {
  //       const Cart = await Carts.findOne({ where: { id } });

  //       if (!Cart) {
  //         return sendResponse(res, 500, 'Cart Id is not found', []);
  //       }

  //       await Cart.destroy();

  //       return sendResponse(res, 200, 'Successfully delete Cart by Id', {
  //         id,
  //       });
  //     } catch (error) {
  //       return sendResponse(res, 500, error, []);
  //     }
  //   },
};

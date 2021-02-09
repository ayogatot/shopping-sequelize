import { Carts, Products, CartItems } from '../models';
import { sendResponse } from '../helpers';

module.exports = {
  createCartItem: async (req, res) => {
    const { id } = req.user;
    const { productId, quantity } = req.body;

    try {
      let cart = await Carts.findOne({
        where: { userId: id, isCheckout: 0 },
      });

      if (!cart) cart = await Carts.create({ userId: id });

      const product = await Products.findOne({ where: { id: productId } });

      console.log(productId, product.name);

      if (!product) {
        return sendResponse(res, 500, 'Product tidak ditemukan', []);
      } else if (quantity > product.quantity) {
        return sendResponse(res, 500, 'Jumlah produk melebihi batas', []);
      }

      const cartItem = await CartItems.create({
        cartId: cart.id,
        productId,
        quantity,
      });

      return sendResponse(
        res,
        200,
        'Successfully create new cart item',
        cartItem
      );
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  updateQuantityCartItem: async (req, res) => {
    const { id } = req.user;
    const { productId, quantity } = req.body;

    try {
      const cart = await Carts.findOne({
        where: { userId: id, isCheckout: 0 },
      });

      const cartItem = await CartItems.findOne({
        where: { cartId: cart.id, productId },
      });

      cartItem.quantity = +quantity;
      cartItem.save();

      return sendResponse(
        res,
        200,
        'Successfully update Quantity cart item',
        cartItem
      );
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  deleteItemFromCart: async (req, res) => {
    const { id } = req.params;
    try {
      const cartItem = await CartItems.findOne({ where: { id } });

      if (!cartItem) {
        return sendResponse(res, 500, 'Cart Item Id is not found', []);
      }

      await cartItem.destroy();

      return sendResponse(res, 200, 'Successfully delete Cart Item from Cart', {
        id,
      });
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },
};

import { Carts, Products, CartItems } from '../models';
import { sendResponse } from '../helpers';

module.exports = {
  checkout: async (req, res) => {
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

      let checkout = {};
      checkout.userId = cart.userId;
      checkout.cartId = cart.cartId;
      checkout.isCheckout = cart.isCheckout;

      checkout.detailItem = cart.CartItems.map((i) => {
        return {
          productId: i.productId,
          productName: i.Product.name,
          pricePerItem: i.Product.price,
          qty: i.quantity,
          totalPerItem: +i.quantity * i.Product.price,
        };
      });

      checkout.subTotal = 0;

      checkout.detailItem.forEach((i) => {
        checkout.subTotal += i.totalPerItem;
      });

      sendResponse(res, 200, 'Successfully Checkout', checkout);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  confirmation: async (req, res) => {
    const { id } = req.user;
    try {
      const cart = await Carts.findOne({
        where: { userId: id, isCheckout: 0 },
        include: [CartItems],
      });

      await cart.CartItems.forEach(async (i) => {
        let product = await Products.findOne({ where: { id: i.productId } });
        console.log(product.name, product.quantity, i.quantity);
        product.quantity -= +i.quantity;
        product.save();
      });

      cart.isCheckout = 1;
      cart.save();

      sendResponse(res, 200, 'Pembayaran berhasil', cart);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },
};

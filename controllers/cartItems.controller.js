import { Carts, Products, CartItems } from '../models';
import { sendResponse } from '../helpers';

module.exports = {
  createCartItem: async (req, res) => {
    const { id } = req.user;
    const { productId, quantity } = req.body;

    try {
      // Check if user Cart is available
      let cart = await Carts.findOne({
        where: { userId: id, isCheckout: 0 },
      });

      if (!cart) cart = await Carts.create({ userId: id });

      const product = await Products.findOne({ where: { id: productId } });

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

  //   getAllProducts: async (req, res) => {
  //     try {
  //       const product = await Products.findAll();

  //       return sendResponse(res, 200, 'Successfully get all Products', product);
  //     } catch (error) {
  //       return sendResponse(res, 500, error, []);
  //     }
  //   },

  //   getProductById: async (req, res) => {
  //     const { id } = req.params;
  //     try {
  //       const product = await Products.findOne({ where: { id } });

  //       return sendResponse(res, 200, 'Successfully get Product by Id', product);
  //     } catch (error) {
  //       return sendResponse(res, 500, error, []);
  //     }
  //   },

  //   updateProductById: async (req, res) => {
  //     const { id } = req.params;
  //     const { name, price, quantity } = req.body;

  //     try {
  //       const product = await Products.findOne({ where: { id } });

  //       if (!product) {
  //         return sendResponse(res, 500, 'Product Id is not found', []);
  //       }

  //       product.name = name;
  //       product.price = price;
  //       product.quantity = quantity;

  //       await product.save();

  //       return sendResponse(
  //         res,
  //         200,
  //         'Successfully update Product by Id',
  //         product
  //       );
  //     } catch (error) {
  //       return sendResponse(res, 500, error, []);
  //     }
  //   },

  //   deleteProductById: async (req, res) => {
  //     const { id } = req.params;
  //     try {
  //       const product = await Products.findOne({ where: { id } });

  //       if (!product) {
  //         return sendResponse(res, 500, 'Product Id is not found', []);
  //       }

  //       await product.destroy();

  //       return sendResponse(res, 200, 'Successfully delete Product by Id', {
  //         id,
  //       });
  //     } catch (error) {
  //       return sendResponse(res, 500, error, []);
  //     }
  //   },
};

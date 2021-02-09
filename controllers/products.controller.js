import { Products } from '../models';
import { sendResponse } from '../helpers';

module.exports = {
  createProduct: async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
      const product = await Products.create({ name, price, quantity });

      return sendResponse(res, 200, 'Successfully create new Product', product);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const product = await Products.findAll();

      return sendResponse(res, 200, 'Successfully get all Products', product);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Products.findOne({ where: { id } });

      return sendResponse(res, 200, 'Successfully get Product by Id', product);
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  updateProductById: async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    try {
      const product = await Products.findOne({ where: { id } });

      if (!product) {
        return sendResponse(res, 500, 'Product Id is not found', []);
      }

      product.name = name;
      product.price = price;
      product.quantity = quantity;

      await product.save();

      return sendResponse(
        res,
        200,
        'Successfully update Product by Id',
        product
      );
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },

  deleteProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Products.findOne({ where: { id } });

      if (!product) {
        return sendResponse(res, 500, 'Product Id is not found', []);
      }

      await product.destroy();

      return sendResponse(res, 200, 'Successfully delete Product by Id', {
        id,
      });
    } catch (error) {
      return sendResponse(res, 500, error, []);
    }
  },
};

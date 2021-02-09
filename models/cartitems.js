'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    static associate({ Products, Carts }) {
      this.belongsTo(Carts, { foreignKey: 'cartId' });
      this.belongsTo(Products, { foreignKey: 'productId' });
    }
  }
  CartItems.init(
    {
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Cart must have a Cart Id' },
          notEmpty: { msg: 'Cart ID must not be empty' },
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Cart must have a Product Id' },
          notEmpty: { msg: 'Product ID must not be empty' },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'CartItems',
    }
  );
  return CartItems;
};

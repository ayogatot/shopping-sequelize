'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    static associate({ Products, Carts }) {
      this.belongsTo(Carts, { targetKey: 'id' });
      this.hasMany(Products, { sourceKey: 'id' });
    }
  }
  CartItems.init(
    {
      cartId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CartItems',
    }
  );
  return CartItems;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    static associate({ Products, Carts }) {
      this.belongsTo(Carts, { foreignKey: 'fk_cartsId', targetKey: 'id' });
      this.hasMany(Products, { foreignKey: 'fk_prodcutId', sourceKey: 'id' });
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

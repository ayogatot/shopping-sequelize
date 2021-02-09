'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    static associate({ Users, CartItems }) {
      this.belongsTo(Users, { foreignKey: 'userId' });
      this.hasMany(CartItems, { foreignKey: 'cartId' });
    }
  }
  Carts.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Cart must have a userId' },
          notEmpty: { msg: 'User ID must not be empty' },
        },
      },
      isCheckout: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Carts',
    }
  );
  return Carts;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get() };
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Products must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          notNull: { msg: 'Products must have a price' },
          notEmpty: { msg: 'Price must not be empty' },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Products must have a quantity' },
          notEmpty: { msg: 'Quantity must not be empty' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );
  return Products;
};

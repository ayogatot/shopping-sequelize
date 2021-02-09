'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Products', [
      {
        name: 'Macbook Pro 2020',
        price: 22000000,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Redmi Note 9 Pro',
        price: 3800000,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Products', null, {});
  },
};

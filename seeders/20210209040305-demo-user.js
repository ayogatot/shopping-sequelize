'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        name: 'Demo User 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  },
};

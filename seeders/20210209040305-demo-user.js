'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        name: 'Demo User 1',
        email: 'demo1@gmail.com',
        password:
          'a75cc6ed4adf50f871d608fbd5f22904:64a3c72365e426bfc20abae49884b0a7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 2',
        email: 'demo2@gmail.com',
        password:
          '96d1d1e14ac7daa9064343b738a1d310:1a7eb796b172989ec873b435da6375d6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 3',
        email: 'demo3@gmail.com',
        password:
          '9ce9fde4b0d83360d1df5dc62ac253fd:712216dd6dc7ac25525f642834645460',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 4',
        email: 'demo4@gmail.com',
        password:
          '604ea075909d96d949f999f459f48939:43469cbdc844cc25c0b2f92a4e2b9374',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Demo User 5',
        email: 'demo5@gmail.com',
        password:
          'b46bb782ca5373c9bdb423ecae0e0cee:71299517dc260d0e2d2c65ddf67bdab3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  },
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: 'Resto Super',
        description: 'Semua makanan disini super',
        location: 'Pondok Indah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RM Mewah',
        description: 'Masakan padang paling mewah di Jakarta',
        location: 'Gandaria City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Warung Lezatos',
        description: 'Sedap Mantap Gurih',
        location: 'Kebayoran Lama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};

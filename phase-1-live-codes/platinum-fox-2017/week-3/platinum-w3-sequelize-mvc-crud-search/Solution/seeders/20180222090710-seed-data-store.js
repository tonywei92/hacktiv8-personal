'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [{
      name: 'Gandaria City',
      city: 'Jakarta',
      country: 'Indonesia',
      rating: '7'
    },{
      name: 'Pondok Indah Mall',
      city: 'Jakarta',
      country: 'Indonesia',
      rating: '9'
    },{
      name: 'Sarinah',
      city: 'Jakarta',
      country: 'Indonesia',
      rating: '5'
    },{
      name: 'Senayan City',
      city: 'Jakarta',
      country: 'Indonesia',
      rating: '6'
    },{
      name: 'Plaza Indonesia',
      city: 'Jakarta',
      country: 'Indonesia',
      rating: '8'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      name: 'Hokben',
      address: 'pondok indah mall 1'
    },{
      name: 'KFC',
      address: 'pondok indah mall 2'
    },{
      name: 'yoshinoya',
      address: 'gandaria city'
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

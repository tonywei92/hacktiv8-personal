'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Factories', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      income: 0,
      outcome: 0,
      profit: 0,
      name: "Mobile Robot Factory"
    }, {
      createdAt: new Date(),
      updatedAt: new Date(),
      income: 0,
      outcome: 0,
      profit: 0,
      name: "Smart Home Factory"
    }, {
      createdAt: new Date(),
      updatedAt: new Date(),
      income: 0,
      outcome: 0,
      profit: 0,
      name: "Agriculture Robot Factory"
    }, {
      createdAt: new Date(),
      updatedAt: new Date(),
      income: 0,
      outcome: 0,
      profit: 0,
      name: "Gundam Seed Factory"
    }, {
      createdAt: new Date(),
      updatedAt: new Date(),
      income: 0,
      outcome: 0,
      profit: 0,
      name: "Doraemon Factory"
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Factories', null, {})
  }
};

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
    return queryInterface.bulkInsert('Kingdoms', [{
      kingdomName: "Endless",
      createdAt: new Date,
      updatedAt: new Date
    },{
      kingdomName: "Spartan",
      createdAt: new Date,
      updatedAt: new Date
    }, {
      kingdomName: "Rendezvous",
      createdAt: new Date,
      updatedAt: new Date
    }, {
      kingdomName: "Battle Leader",
      createdAt: new Date,
      updatedAt: new Date
    }, {
      kingdomName: "Kapak Merah",
      createdAt: new Date,
      updatedAt: new Date
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Kingdoms', null, {})
  }
};

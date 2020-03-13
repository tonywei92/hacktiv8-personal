'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Hobbies", [
      {
        name: "berenang",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "bermain",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "terbang",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "makan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "tidur",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "melamun",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

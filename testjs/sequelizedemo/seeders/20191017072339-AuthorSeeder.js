"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Authors", [
      {
        name: "Danang",
        address: "tanah abang",
        age: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rayhan",
        address: "rumah",
        age: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Authors", {
      id: {
        [Sequelize.Op.or]: [6, 7]
      }
    });
  }
};

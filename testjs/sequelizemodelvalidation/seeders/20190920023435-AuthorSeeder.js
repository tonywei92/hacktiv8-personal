"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Authors", [
      {
        name: "Dipadana",
        address: "jln kebayoran",
        age: 30,
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Panji",
        address: "Tanah abang",
        age: 36,
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Devita",
        address: "Tanah kusir",
        age: 40,
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Authors", {});
  }
};

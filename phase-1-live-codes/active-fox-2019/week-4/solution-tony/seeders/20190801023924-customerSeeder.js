'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      {
        identityNumber: "1234567890",
        fullName: "Andy",
        address: "Jln Kebayoran",
        birthDate: new Date(Date.parse('01-01-1992')),
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        identityNumber: "0987654321",
        fullName: "Icha",
        address: "Jln Kebon Jeruk",
        birthDate: new Date(Date.parse('02-02-1995')),
        gender: "Male",
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

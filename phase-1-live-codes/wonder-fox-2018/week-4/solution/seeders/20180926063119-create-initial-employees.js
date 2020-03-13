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
    return queryInterface.bulkInsert('Employees', [
      {
        firstName: 'Dimitri',
        lastName: 'Wahyudiputra',
        email: 'dimitri@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Ryan',
        lastName: 'Akbar',
        email: 'ryan@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        firstName: 'Rifki',
        lastName: 'Fauzi',
        email: 'rifki@mail.com',
        createdAt: new Date,
        updatedAt: new Date
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Employees', null, {});
  }
};

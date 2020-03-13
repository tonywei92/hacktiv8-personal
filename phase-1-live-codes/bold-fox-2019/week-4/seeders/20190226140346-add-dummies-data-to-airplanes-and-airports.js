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
   const airports = queryInterface.bulkInsert('Airports', [{
    name: "Soekarno Hatta",
    country: "Indonesia",
    createdAt: new Date,
    updatedAt:new Date
   }, {
    name: "Century Mine",
    country: "Australia",
    createdAt: new Date,
    updatedAt:new Date
   }, {
    name: "Augsburg Airport",
    country: "German",
    createdAt: new Date,
    updatedAt:new Date
   }], {})

   const airplanes = queryInterface.bulkInsert("Airplanes", [{
     type: "N219",
     cost: 1350,
     createdAt: new Date,
     updatedAt: new Date
   }, {
    type: "CN235",
    cost: 650,
    createdAt: new Date,
    updatedAt: new Date
   }, {
    type: "N250",
    cost: 1100,
    createdAt: new Date,
    updatedAt: new Date
   }, {
    type: "N212",
    cost: 800,
    createdAt: new Date,
    updatedAt: new Date
   }])
   return Promise.all([airplanes, airports])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return Promise.all([
      queryInterface.bulkDelete("Airports", null, {}),
      queryInterface.bulkDelete("Airplanes", null, {})
    ])
  }
};

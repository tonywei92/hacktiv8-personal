'use strict';
const fs =require('fs')
const data = fs.readFileSync('./vehicle.json', 'utf8')
module.exports = {
  up: (queryInterface, Sequelize) => {
      // const vehicle = JSON.parse(data)
      const vehicle = [
        {
          "name": "Pajero Sport",
          "GasolineId": 5,
          "maxFuel": 10,
          "fuel": 5,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Lexus RX200t",
          "GasolineId": 4,
          "maxFuel": 20,
          "fuel": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
      ]

      return queryInterface.bulkInsert('Vehicles', vehicle, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Vehicles', null, {});
  }
};

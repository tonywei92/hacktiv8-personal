'use strict';
const fs =require('fs')
const data = fs.readFileSync('./gasoline.json', 'utf8')
module.exports = {
  up: (queryInterface, Sequelize) => {
      // const gas = JSON.parse(data)
      const gas = [
        {
          "name": "Premium",
          "price": 10000,
          "quota": 10,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Pertalite",
          "price": 12000,
          "quota": 5,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Pertamax",
          "price": 13000,
          "quota": 20,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Pertamax Plus",
          "price": 15000,
          "quota": 15,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Solar",
          "price": 8000,
          "quota": 15,
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
      ]
      return queryInterface.bulkInsert('Gasolines', gas, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Gasolines', null, {});
  }
};

'use strict';
const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./dataCrops.json'))
data = data.map(element => {
  element.createdAt = new Date(),
  element.updatedAt = new Date()
  return element
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vegetables', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vegetables', null, {});
  }
};

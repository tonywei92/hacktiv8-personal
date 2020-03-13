'use strict';
const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./dataSeasons.json', 'utf8'))
data = data.map(element => {
  element.createdAt = new Date(),
  element.updatedAt = new Date()
  return element
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Seasons', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seasons', null, {});
  }
};
'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./movies.json', 'utf8')
    data = JSON.parse(data)
    data = data.map(element => { 
      element.createdAt = new Date(element.createdAt)
      element.updatedAt = new Date()
      return element
    })
      return queryInterface.bulkInsert('Movies', data)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Movies', null, {})
  }
};

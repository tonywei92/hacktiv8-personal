'use strict'

const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const data = JSON.parse(fs.readFileSync('./gasoline.json', 'utf-8')).map(data => {
      return {
        name: data.name,
        price: data.price,
        quota: data.quota,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    return queryInterface.bulkInsert('Gasolines', data)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}

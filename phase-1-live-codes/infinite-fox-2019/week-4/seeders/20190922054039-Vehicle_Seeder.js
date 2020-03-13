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

    const data = JSON.parse(fs.readFileSync('./vehicle.json', 'utf-8')).map(data => {
      return {
        name: data.name,
        type: data.type,
        GasolineId: data.GasolineId,
        fuel: data.fuel,
        maxFuel: data.maxFuel,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    return queryInterface.bulkInsert('Vehicles', data)
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

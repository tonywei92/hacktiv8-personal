'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let promises = []
    promises.push(queryInterface.addColumn('Donations', 'virtualAccount', Sequelize.STRING))
    promises.push(queryInterface.removeColumn('Campaigns', 'virtualAccount'))
    return Promise.all(promises)
  },

  down: (queryInterface, Sequelize) => {
    let promises = []
    promises.push(queryInterface.addColumn('Campaigns', 'virtualAccount', Sequelize.STRING))
    promises.push(queryInterface.removeColumn('Donations', 'virtualAccount'))
    return Promise.all(promises)
  }
};

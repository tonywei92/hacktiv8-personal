'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const promises = [];
    promises.push(queryInterface.removeColumn('campaigns', 'virtualAccount'));
    promises.push(queryInterface.addColumn('donations', 'virtualAccount', Sequelize.STRING));
    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    const promises = [];
    promises.push(queryInterface.removeColumn('donations', 'virtualAccount'));
    promises.push(queryInterface.addColumn('campaigns', 'virtualAccount', Sequelize.STRING));
    return Promise.all(promises);
  }
};

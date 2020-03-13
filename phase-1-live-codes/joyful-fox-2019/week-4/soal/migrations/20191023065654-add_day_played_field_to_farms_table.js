'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Farms', 'dayPlayed', { type: Sequelize.INTEGER })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Farms', 'dayPlayed');
  }
};

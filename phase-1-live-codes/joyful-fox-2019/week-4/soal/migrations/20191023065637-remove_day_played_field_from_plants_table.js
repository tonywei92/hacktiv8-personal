'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Plants', 'dayPlayed');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Plants', 'dayPlayed', { type: Sequelize.INTEGER });
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Vegetables', 'SeasonId', { type: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Vegetables', 'SeasonId');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Plants', 'FarmId', { type: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Plants', 'FarmId');
  }
};

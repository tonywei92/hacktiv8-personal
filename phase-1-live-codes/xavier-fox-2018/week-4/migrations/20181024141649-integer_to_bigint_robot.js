'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Factories', 'outcome', { type: Sequelize.BIGINT });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Factories', 'outcome', { type: Sequelize.INTEGER });
  }
};

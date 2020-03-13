'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Books', 'availableToBorrow', {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Books', 'availableToBorrow', {
      type: Sequelize.BOOLEAN,
      defaultValue: null
    });
  }
};

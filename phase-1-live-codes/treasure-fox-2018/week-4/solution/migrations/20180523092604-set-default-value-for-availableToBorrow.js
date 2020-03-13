'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Movies', 'availableToRent', {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Movies', 'availableToRent', {
      type: Sequelize.BOOLEAN,
      defaultValue: null
    });
  }
};

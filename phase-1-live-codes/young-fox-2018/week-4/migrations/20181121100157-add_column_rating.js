'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Movies', 'rating', { type: Sequelize.INTEGER, defaultValue: 0 });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Movies', 'rating');
  }
};

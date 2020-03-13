'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.changeColumn('Gasolines', 'quota', { type: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Loans', 'returned', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Loans', 'returned', {
      type: Sequelize.BOOLEAN,
      defaultValue: null
    });
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Authors', 'email', {
      type: Sequelize.STRING,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Authors', 'email');
  }
};

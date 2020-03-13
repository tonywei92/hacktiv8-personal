'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const noReportUpdatedPromises = [
      queryInterface.removeColumn("Courts", "noReport"),
      queryInterface.addColumn("Reports", "noReport", {
        type: Sequelize.STRING
      })
    ]

    return Promise.all(noReportUpdatedPromises)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    const noReportUpdatedPromises = [
      queryInterface.removeColumn("Reports", "noReport"),
      queryInterface.addColumn("Courts", "noReport", {
        type: Sequelize.STRING
      })
    ]
    
    return Promise.all(noReportUpdatedPromises)
  }
};

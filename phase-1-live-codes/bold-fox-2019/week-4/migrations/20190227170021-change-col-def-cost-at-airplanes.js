'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */   
   const changeDefinition = queryInterface.changeColumn("Airplanes", "cost", {
     type: Sequelize.FLOAT
    })
    return changeDefinition
  },

  down: (queryInterface, Sequelize) => {
    const changeDefinition = queryInterface.changeColumn("Airplanes", "cost", {
      type: Sequelize.INTEGER
     })
     return changeDefinition
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

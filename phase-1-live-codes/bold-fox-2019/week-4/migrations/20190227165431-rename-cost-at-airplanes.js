'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const renameColumn = queryInterface.renameColumn("Airplanes", "price", "cost")

   return renameColumn
  },

  down: (queryInterface, Sequelize) => {
    const renameColumn = queryInterface.renameColumn("Airplanes", "cost", "price")
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return renameColumn

  }
};

'use strict';
const {Task} = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Task.sync();
    // return queryInterface.createTable('Tasks', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   name: {
    //     type: Sequelize.STRING
    //   },
    //   due_date: {
    //     type: Sequelize.DATE
    //   },
    //   UserId: {
    //     type: Sequelize.INTEGER
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FlightSchedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING
      },
      boardingTime: {
        type: Sequelize.DATE
      },
      businessClassCost: {
        type: Sequelize.FLOAT
      },
      firstClassCost: {
        type: Sequelize.FLOAT
      },
      economyClassCost: {
        type: Sequelize.FLOAT
      },
      airplane: {
        type: Sequelize.STRING
      },
      AirportId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FlightSchedules');
  }
};
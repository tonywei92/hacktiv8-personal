'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Farms', 'birthDayDate', { type: `${Sequelize.DATE} USING TO_DATE("birthDayDate", 'YYYY/MM/DD')` });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Farms', 'birthDayDate', { type: `VARCHAR USING CAST("birthDayDate" AS VARCHAR)` });
  }
};

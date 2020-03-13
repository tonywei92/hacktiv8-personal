'use strict';
const fs = require('fs');
const jsonRecords = JSON.parse(fs.readFileSync('./seed-farm.json', 'utf8'));

for (let i = 0; i < jsonRecords.length; i++) {
  jsonRecords[i].createdAt = new Date();
  jsonRecords[i].updatedAt = new Date();
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Farms', jsonRecords);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
 
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

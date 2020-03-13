'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const farms = fs
      .readFileSync('./seed-farm.csv', 'utf-8')
      .split('\n')
      .reduce((acc, curr, index) => {
        if(index === 0) {
          return [];
        } else {
          const splitCurr = curr.split(',');
          acc.push({
            id: splitCurr[0],
            farmName: splitCurr[1],
            playerName: splitCurr[2],
            birthDayDate: splitCurr[3],
            money: splitCurr[4],
            dayPlayed: splitCurr[5],
            createdAt: new Date,
            updatedAt: new Date
          });
          return acc;
        }
      }, [])
    return queryInterface.bulkInsert('Farms', farms, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Farms', null, {});
  }
};

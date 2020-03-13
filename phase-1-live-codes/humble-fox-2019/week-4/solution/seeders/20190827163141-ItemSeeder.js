'use strict';
const fs = require('fs');
const itemsArr = fs.readFileSync('./items.csv', 'utf8').split('\n');
const items = [];
for (let i = 1; i < itemsArr.length - 1; i++) {
  let temp = itemsArr[i].split(',')
  items.push({
    name: temp[0],
    condition: temp[1],
    pricePerDay: temp[2],
    createdAt: new Date(),
    updatedAt: new Date()
  });
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.delete('Items', { truncate: true })
  }
};

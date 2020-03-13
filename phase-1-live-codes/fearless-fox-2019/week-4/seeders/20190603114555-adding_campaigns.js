'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = JSON.parse(fs.readFileSync('campaignSeeds.json', 'utf-8'))
    data.forEach(campaign => {
      campaign.createdAt = new Date()
      campaign.updatedAt = new Date()
      campaign.timeLimit = new Date(campaign.timeLimit)
    });
    return queryInterface.bulkInsert('Campaigns', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};

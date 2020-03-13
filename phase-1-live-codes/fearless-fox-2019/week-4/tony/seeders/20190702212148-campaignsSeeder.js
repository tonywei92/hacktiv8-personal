'use strict';
const fs = require('fs');
const { campaign } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const campaigns = JSON.parse(fs.readFileSync('./campaignSeeds.json', 'utf-8'));
    return campaign.bulkCreate(campaigns)
  },

  down: (queryInterface, Sequelize) => {
    return campaign.truncate();
  }
};

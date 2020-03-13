'use strict';
const fs = require('fs');
const { donation } = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const donations = JSON.parse(fs.readFileSync('./DonationSeeds.json', 'utf-8'));
    return donation.bulkCreate(donations);
  },

  down: (queryInterface, Sequelize) => {
    return donation.truncate();
  }
};

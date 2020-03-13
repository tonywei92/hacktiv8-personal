'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = JSON.parse(fs.readFileSync('DonationSeeds.json', 'utf-8'))
    data.forEach(donation => {
      donation.createdAt = new Date()
      donation.updatedAt = new Date()
      donation.paidDate = new Date(donation.paidDate)
    });
    return queryInterface.bulkInsert('Donations', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Donations', null, {});
  }
};

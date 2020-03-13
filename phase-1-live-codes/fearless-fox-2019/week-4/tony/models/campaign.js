'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campaign extends Model {
    getCollectedAmount(format = false) {
      let total = 0;
      this.donations.forEach(donation => {
        total += donation.totalDonation;
      })
      if (format) {
        return 'Rp. ' + total
      }
      else {
        return total;
      }
    }

    getPercentage() {
      let singlePercent = this.donationTarget / 100
      return Math.round(this.getCollectedAmount() / singlePercent)
    }
  }
  campaign.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    timeLimit: DataTypes.DATE,
    donationTarget: DataTypes.INTEGER,
    verified: DataTypes.BOOLEAN
  }, {
      underscored: false, sequelize, modelName: 'campaign'
    });
  campaign.associate = function (models) {
    campaign.hasMany(models.donation)
    campaign.donation = models.donation;
  };
  return campaign;
};
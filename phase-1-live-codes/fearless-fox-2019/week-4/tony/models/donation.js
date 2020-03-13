'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donation extends Model {
    getDonation() {
      return 'Rp. ' + this.totalDonation;
    }
  }
  donation.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name should not be empty'
        }
      }
    },
    totalDonation: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1000,
          msg: "Minimum donation should be 1000"
        }
      },
    },
    paidDate: DataTypes.DATE,
    message: DataTypes.STRING,
    paid: DataTypes.BOOLEAN,
    virtualAccount: DataTypes.STRING,
    campaignId: DataTypes.INTEGER
  }, {
      hooks: {
        beforeCreate: (record, options) => {
          const { timeLimit } = options;
          console.log(timeLimit);
          if (Date.parse(timeLimit) < new Date()) {
            return Promise.reject(new Error('Campaign already expired'))
          }
          else {
            record.virtualAccount = `5555-${record.campaignId}-${record.name}`
            record.paid = false;
            record.paidDate = new Date()
          }
        }
      },
      sequelize, modelName: 'donation',
      underscored: false
    });
  donation.associate = function (models) {
    donation.belongsTo(models.campaign)
    donation.campaign = models.campaign
  };
  return donation;
};
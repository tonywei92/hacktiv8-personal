'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model;
  class Campaign extends Model {
    static associate(models) {
      Campaign.hasMany(models.Donation)
    }
    getCollectedAmount() {
      let total = 0
      this.Donations.forEach(element => {
        total += element.totalDonation
      });
      return total
    }
  }
  Campaign.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    timeLimit: {
      type: DataTypes.DATE
    },
    donationTarget: DataTypes.INTEGER,
    verified: {
      type: DataTypes.BOOLEAN,
      validate: {
        cantBeUnverified(val) {
          if (this.previous('verified') && !val) {
            // this.donationTarget
            throw new Error('Cannot change verified campaign to unverified')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Campaign'
    //options
  });
  return Campaign
}

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Campaign = sequelize.define('Campaign', {
//     name: DataTypes.STRING,
//     description: DataTypes.STRING,
//     location: DataTypes.STRING,
//     timeLimit: {
//       type: DataTypes.DATE
//     },
//     donationTarget: DataTypes.INTEGER,
//     verified: {
//       type: DataTypes.BOOLEAN,
//       validate: {
//         cantBeUnverified (val) {
//           if(this.previous('verified') && !val) {
//             // this.donationTarget
//             throw new Error('Cannot change verified campaign to unverified')
//           }
//         }
//       }
//     }
//   }, {});
//   Campaign.associate = function(models) {
//     Campaign.hasMany(models.Donation)
//   };
//   Campaign.prototype.getCollectedAmount = function () {
//     let total = 0
//     this.Donations.forEach(element => {
//       total += element.totalDonation
//     });
//     return total
//   }
//   return Campaign;
// };
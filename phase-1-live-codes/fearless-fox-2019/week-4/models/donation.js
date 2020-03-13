'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Donation extends Model {
    static associate(models) {
      Donation.belongsTo(models.Campaign)
    }
  }

  Donation.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          msg: 'Please input your name'
        }
      }
    },
    totalDonation: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [1000],
          msg: "Minimum donation is Rp. 1000"
        }
      }
    },
    paidDate: DataTypes.DATE,
    message: DataTypes.STRING,
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    virtualAccount: DataTypes.STRING,
    CampaignId: DataTypes.INTEGER
  }, {
    validate: {
      justLog() {
        console.log('im heree', this)
      }
    },
    sequelize,
    modelName: 'Donation'
  })

  Donation.addHook('beforeCreate', (donation, options) => {
    const { verified, timeLimit } = options
    if (verified) {
      if (timeLimit < new Date()) {
        throw {
          errors: {
            message: 'This donation already closed'
          }
        }
      } else {
        donation.virtualAccount = `5555-${donation.CampaignId}-${donation.name}`
      }
    } else {
      return Promise.reject({
        errors: {
          message: 'This donation not verified yet'
        }
      })
    }
  });

  Donation.addHook('beforeDestroy', (donation, options) => {
    if (donation.paid) {
      throw {
        errors: {
          message: 'Cannot delete donation that already verified'
        }
      }
    }
  })

  return Donation;
};

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Donation = sequelize.define('Donation', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notNull: true,
//         notEmpty: {
//           msg: 'Please input your name'
//         }
//       }
//     },
//     totalDonation: {
//       type: DataTypes.INTEGER,
//       validate: {
//         min: {
//           args: [1000],
//           msg: "Minimum donation is Rp. 1000"
//         }
//       }
//     },
//     paidDate: DataTypes.DATE,
//     message: DataTypes.STRING,
//     paid: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     virtualAccount: DataTypes.STRING,
//     CampaignId: DataTypes.INTEGER
//   }, {});


//   Donation.addHook('beforeCreate', (donation, options) => {
//     const { verified, timeLimit } = options
//     if (verified) {
//       if(timeLimit < new Date()) {
//         throw {
//           errors: {
//             message: 'This donation already closed'
//           }
//         }
//       } else {
//         donation.virtualAccount = `5555-${donation.CampaignId}-${donation.name}`
//       }
//     } else {
//       return Promise.reject( {
//         errors: {
//           message: 'This donation not verified yet'
//         }
//       })
//     }
//   });

//   Donation.addHook('beforeDestroy', (donation, options) => {
//     if(donation.paid) {
//       throw {
//         errors: {
//           message: 'Cannot delete donation that already verified'
//         }
//       }
//     }
//   })

//   Donation.associate = function (models) {
//     Donation.belongsTo(models.Campaign)
//   };
//   return Donation;
// };
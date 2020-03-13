'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Customer extends Model {
    get birthDateShort() {
      const birthDate = new Date(Date.parse(this.birthDate));
      return birthDate.toISOString().split('T')[0];
    }
  }
  Customer.init({
    identityNumber: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [15, 20],
          msg: "Identity Number minimum 16 characters and maximum 20 characters"
        },
        notEmpty: {
          msg: "Identity Number must be filled"
        }
      }
    },
    fullName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Full name must be filled"
        }
      }
    },
    address: DataTypes.STRING,
    birthDate: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Birth Date must be filled"
        }
      }
    },
    gender: DataTypes.STRING
  }, {
      sequelize, validate: {
        duplicateIdentity(next) {
          if (this.identityNumber) {
            Customer.findAll({ where: { identityNumber: this.identityNumber } })
              .then(customers => {
                if (customers.length > 0) {
                  next("Duplicate Identity Number");
                }
                else {
                  next();
                }
              })
              .catch(err => {
                next(err);
              });
          }
          else {
            next();
          }

        }
      }
    });
  Customer.associate = function (models) {
    Customer.hasMany(models.Account, { foreignKey: "customerId" })
  };


  return Customer;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    identityNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Identity Number must be filled'
        },
        len: {
          args: [16, 20],
          msg: 'Identity Number minimum 16 characters and maximum 20 characters'
        },
        isUnique: function(value, next) {
          let self = this;
          Customer
           .findOne({
             where: {
               identityNumber: value,
               id: {
                 [sequelize.Op.ne]: this.id
               }
             }
           })
           .then(customer => {
             if (customer) {
               next('Duplicate Identity Number');
             } else {
               next();
             }
           })
           .catch(err => {
             next(err);
           })
        }
      }
    },
    fullName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Full name must be filled'
        }
      }
    },
    address: DataTypes.STRING,
    birthDate: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Birth Date must be filled'
        }
      }
    },
    gender: DataTypes.STRING,
    BankId: DataTypes.INTEGER
  }, {});

  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsTo(models.Bank);
    Customer.hasMany(models.Account);
  };

  Customer.prototype.convertBirthDate = function() {
    return this.birthDate.toISOString().substring(0,10);
  }

  return Customer;
};

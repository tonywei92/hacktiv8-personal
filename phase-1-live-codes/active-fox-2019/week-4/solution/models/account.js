'use strict';

const formatUang = require('../helper/formatUang').formatUang;

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    accountNumber: DataTypes.STRING,
    type: DataTypes.STRING,
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 500000
    },
    CustomerId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(value) {
        value.accountNumber = String(Math.random()).substring(2,12);
      },
      beforeBulkUpdate: function(value) {
        return new Promise((resolve, reject) => {
          if (value.amount) {
            if (value.attributes.balance < value.amount) {
              reject('Insufficient balance');
            } else {
              value.attributes.balance -= value.amount;
              resolve(value.attributes)
            }
          } else {
            resolve()
          }
        })
      }
    }
  });

  Account.associate = function(models) {
    Account.belongsTo(models.Customer);
  };

  Account.prototype.getBalance = function() {
    return formatUang(this.balance);
  }

  return Account;
};

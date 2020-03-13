'use strict';
const crypto = require('crypto');


module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Account extends Model {
    get balanceFormatted() {
      return Number(this.balance).toLocaleString('en-ID', { style: 'currency', currency: 'IDR' });
    }

    get accountName() {
      if (this.type === "1") {
        return "On Account";
      }
      if (this.type === "2") {
        return "Xtra Payroll"
      }
      if (this.type === "3") {
        return "Tabunganku"
      }
    }
  }
  Account.init({
    customerId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    accountNumber: {
      type: DataTypes.STRING
    },
    balance: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: [500000],
          msg: "Minimum balance for new Accout: Rp500.000"
        }
      }
    }
  }, {
      sequelize, hooks: {
        beforeValidate: (account, options) => {
          const secret = String(Math.random() * 10000);
          const hash = crypto.createHmac('sha256', secret)
            .update('I love cupcakes')
            .digest('hex');

          account.accountNumber = hash.substring(0, 9);

          if (account.balance === "") {
            account.balance = 500000;
          }
        }
      }
    });

  Account.associate = function (models) {
    Account.belongsTo(models.Customer, { foreignKey: "customerId" })
  };
  return Account;
};
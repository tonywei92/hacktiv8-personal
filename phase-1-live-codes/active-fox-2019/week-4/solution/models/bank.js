'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    bankName: DataTypes.STRING
  }, {});
  Bank.associate = function(models) {
    // associations can be defined here
    Bank.hasMany(models.Customer);
  };
  return Bank;
};

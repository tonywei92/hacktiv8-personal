'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    total_outlets: DataTypes.INTEGER,
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Item)
  };
  return Company;
};

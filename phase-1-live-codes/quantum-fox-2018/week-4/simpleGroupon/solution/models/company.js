'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Item)
  };
  return Company;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factory = sequelize.define('Factory', {
    name: DataTypes.STRING,
    income: DataTypes.INTEGER,
    outcome: DataTypes.INTEGER,
    profit: DataTypes.INTEGER
  }, {});
  Factory.associate = function(models) {
    // associations can be defined here
    Factory.hasMany(models.Robot)
  };
  return Factory;
};
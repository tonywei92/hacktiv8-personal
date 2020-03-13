'use strict';
module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    name: DataTypes.STRING,
    income: DataTypes.INTEGER,
    outcome: DataTypes.INTEGER
  }, {});
  Season.associate = function(models) {
    // associations can be defined here
    Season.hasMany(models.Vegetable)
  };
  return Season;
};
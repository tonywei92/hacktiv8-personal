'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.hasMany(models.Schedule)
  };
  return Restaurant;
};
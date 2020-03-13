'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('Airport', {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Airport.associate = function(models) {
    // associations can be defined here
    Airport.hasMany(models.FlightSchedule)
  };
  return Airport;
};
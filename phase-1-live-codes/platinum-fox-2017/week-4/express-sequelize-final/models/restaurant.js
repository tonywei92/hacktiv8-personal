'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.hasMany(models.Menu)
  };
  return Restaurant;
};

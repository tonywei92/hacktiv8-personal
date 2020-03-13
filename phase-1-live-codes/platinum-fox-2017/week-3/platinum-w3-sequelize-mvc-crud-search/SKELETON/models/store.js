'use strict';
module.exports = (sequelize, DataTypes) => {
  var Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Store;
};
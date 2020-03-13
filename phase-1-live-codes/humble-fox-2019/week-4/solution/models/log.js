'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Log extends Model{

  }
  Log.init({
    itemId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {sequelize});
  Log.associate = function(models) {
    // associations can be defined here
  };
  return Log;
};
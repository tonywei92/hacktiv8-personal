'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airplane = sequelize.define('Airplane', {
    type: DataTypes.STRING,
    cost: DataTypes.FLOAT
  }, {});
  Airplane.associate = function(models) {
    // associations can be defined here
  };
  return Airplane;
};
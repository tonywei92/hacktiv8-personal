'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comic = sequelize.define('Comic', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Comic.associate = function(models) {
    // associations can be defined here
  };
  return Comic;
};
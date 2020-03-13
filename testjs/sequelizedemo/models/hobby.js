'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobby = sequelize.define('Hobby', {
    name: DataTypes.STRING
  }, {});
  Hobby.associate = function (models) {
    Hobby.belongsToMany(models.Author, { through: models.AuthorHobby })
  };
  return Hobby;
};
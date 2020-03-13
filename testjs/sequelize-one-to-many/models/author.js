'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const models = sequelize.models;
  class Author extends Model {

  }

  Author.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Author',

  });

  Author.associate = function (models) {
    Author.hasMany(models.Book);
    Author.belongsToMany(models.Community, { through: models.AuthorCommunity })
  };

  return Author;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    availableToBorrow: DataTypes.BOOLEAN
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.Loan, {
      foreignKey: 'bookId'
    });
  };
  return Book;
};

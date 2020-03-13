"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      AuthorId: DataTypes.INTEGER
    },
    {}
  );
  Book.associate = function (models) {
  };
  return Book;
};

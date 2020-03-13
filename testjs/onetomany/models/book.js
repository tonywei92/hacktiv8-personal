"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      author_id: DataTypes.INTEGER
    },
    {}
  );
  Book.associate = function(models) {
    Book.belongsTo(models.Author, { foreignKey: "author_id", targetKey: "id" });
  };
  return Book;
};

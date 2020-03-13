"use strict";
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {}
  );
  Author.associate = function(models) {
    Author.hasMany(models.Book, { foreignKey: "author_id", sourceKey: "id" });
    Author.hasOne(models.AuthorPhone);
  };
  return Author;
};

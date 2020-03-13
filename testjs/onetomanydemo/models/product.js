"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {}
  );
  Product.associate = function(models) {
    Product.belongsToMany(models.Category, { through: models.ProductCategory });
    Product.hasMany(models.ProductColor);
  };
  return Product;
};

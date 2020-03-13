"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProductColor = sequelize.define(
    "ProductColor",
    {
      name: DataTypes.STRING,
      ProductId: DataTypes.INTEGER
    },
    {}
  );
  ProductColor.associate = function(models) {
    ProductColor.belongsTo(models.Product);
  };
  return ProductColor;
};

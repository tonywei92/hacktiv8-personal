"use strict";
const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Product extends Model {}

  sequelize.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      stock: DataTypes.STRING
    },
    {
      hooks: {
        beforeUpdate(instance, options) {
          const secret = "abcdefg";
          const nameEncrypted = crypto
            .createHmac("sha256", secret)
            .update(instance.password)
            .digest("hex");
          instance.password = nameEncrypted;
          return Product.findByPk(instance.id).then(product => {
            instance.quantity = product.quantity - instance.quantity;
          });
        },
        beforeBulkUpdate() {}
      },
      validate: {},
      sequelize
    }
  );
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};

"use strict";
const crypto = require("crypto");
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {
      hooks: {
        beforeCreate(instance, options) {
          const secret = "abcdefg";
          const nameEncrypted = crypto
            .createHmac("sha256", secret)
            .update(instance.password)
            .digest("hex");
          instance.password = nameEncrypted;
        },
        afterBulkCreate(instances, options) {}
      }
    }
  );
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};

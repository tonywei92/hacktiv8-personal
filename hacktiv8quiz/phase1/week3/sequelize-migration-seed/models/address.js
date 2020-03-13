"use strict";
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      id: DataTypes.INTEGER,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      zip_code: DataTypes.STRING
    },
    {}
  );
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};

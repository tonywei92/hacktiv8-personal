"use strict";
module.exports = (sequelize, DataTypes) => {
  const AuthorPhone = sequelize.define(
    "AuthorPhone",
    {
      number: DataTypes.STRING,
      AuthorId: DataTypes.INTEGER
    },
    {}
  );
  AuthorPhone.associate = function(models) {
    // associations can be defined here
  };
  return AuthorPhone;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthorHobby = sequelize.define('AuthorHobby', {
    AuthorId: DataTypes.INTEGER,
    HobbyId: DataTypes.INTEGER
  }, {});
  AuthorHobby.associate = function(models) {
    // associations can be defined here
  };
  return AuthorHobby;
};
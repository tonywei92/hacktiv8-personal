'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthorCommunity = sequelize.define('AuthorCommunity', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    AuthorId: DataTypes.INTEGER,
    CommunityId: DataTypes.INTEGER,
  }, {});
  AuthorCommunity.associate = function (models) {
    // associations can be defined here
  };
  return AuthorCommunity;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Community = sequelize.define('Community', {
    name: DataTypes.STRING
  }, {});
  Community.associate = function (models) {
    Community.belongsToMany(models.Author, { through: models.AuthorCommunity })
  };
  return Community;
};
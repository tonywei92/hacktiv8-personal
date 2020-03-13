'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class userproject extends Model {}

  userproject.init(
    {
      projectId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      }
    },
    { sequelize }
  )
  userproject.associate = function(models) {
    // associations can be defined here
    userproject.belongsTo(models.user)
    userproject.belongsTo(models.project)
  }
  return userproject
}

'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class project extends Model {}

  project.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: DataTypes.STRING,
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      }
    },
    { sequelize }
  )
  project.associate = function(models) {
    // associations can be defined here
    project.belongsToMany(models.user, { through: models.userproject })
    project.hasMany(models.projecttodo)
  }
  return project
}

'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class projecttodo extends Model {}
  projecttodo.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      projectId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      due_date: DataTypes.DATE
    },
    {
      hooks: {
        beforeCreate(instance, options) {
          if (!instance.status) {
            instance.status = 'start'
          }
        }
      },
      sequelize
    }
  )
  projecttodo.associate = function(models) {
    // associations can be defined here
    projecttodo.belongsTo(models.project)
  }
  return projecttodo
}

'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class todo extends Model {}

  todo.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      userId: {
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
  todo.associate = function(models) {
    // associations can be defined here
    todo.belongsTo(models.user)
  }
  return todo
}

'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class holiday extends Model {}
  holiday.init(
    {
      userId: DataTypes.UUID,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      due_date: DataTypes.DATE
    },
    {
      sequelize,
      hooks: {
        beforeCreate: function(instance, option) {
          if (!instance.status) {
            instance.status = 'start'
          }
        }
      }
    }
  )
  holiday.associate = function(models) {
    // associations can be defined here
    holiday.belongsTo(models.user)
  }
  return holiday
}

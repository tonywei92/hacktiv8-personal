'use strict'
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcrypt')
  const { Model } = sequelize.Sequelize
  class user extends Model {}

  user.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Email is required'
          },
          isEmail: {
            msg: 'Email format is wrong'
          },
          isUnique(value) {
            return user
              .findAll({
                where: {
                  email: value
                }
              })
              .then(result => {
                if (result.length != 0) {
                  throw new Error('Email already exsist')
                }
              })
          }
        }
      },
      imageUrl: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate(instance, options) {
          instance.password = bcrypt.hashSync(instance.password, 10)

          if (!instance.imageUrl) {
            instance.imageUrl =
              'https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg'
          }
        }
      },
      sequelize
    }
  )
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.todo)
    user.hasMany(models.holiday)
    user.belongsToMany(models.project, { through: models.userproject })
  }
  return user
}

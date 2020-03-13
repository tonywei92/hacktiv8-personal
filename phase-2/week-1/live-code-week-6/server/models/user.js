'use strict';
const bcrypt = require('bcrypt')
const salt = 10
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize
  class User extends Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    }
  }, {
    hooks: {
      beforeSave(instance, option) {
        instance.password = bcrypt.hashSync(instance.password, salt)
        return instance
      }
    },
    sequelize
    // ,timestamps : false,
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Player)
  };
  return User;
};
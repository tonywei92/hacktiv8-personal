'use strict';
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Teacher extends Model {}
  Teacher.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'This email is already taken',
          fields: ['email']
        },
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid Email Format'
          },
          notNull: {
            args: true,
            msg: 'Email is required field'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Password is required field'
          },
          len: {
            args: [6],
            msg: 'Password at least have 6 characters'
          }
        }
      }
    },
    {
      sequelize,
      hooks: {
        beforeCreate(teacher, options) {
          teacher.password = hashPassword(teacher.password);
        }
      }
    }
  );
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.hasMany(models.Student);
  };
  return Teacher;
};

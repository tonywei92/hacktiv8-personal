'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Student extends Model {}
  Student.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Student name should not empty'
          },
          notNull: {
            args: true,
            msg: 'Student name is required field'
          }
        }
      },
      score: {
        type: DataTypes.ENUM,
        values: ['A', 'B', 'C', 'D'],
        validate: {
          isIn: {
            args: [['A', 'B', 'C', 'D']],
            msg: 'Invalid score value'
          }
        }
      },
      TeacherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Invalid id teacher'
          }
        }
      }
    },
    {
      sequelize,
      hooks: {
        beforeValidate(student, options) {
          const { score } = student;
          if (score < 0) {
            return Promise.reject({
              status: 400,
              message: 'Score cannot be less than 0'
            });
          } else if (score < 100) {
            return Promise.reject({
              status: 400,
              message: 'Score cannot be greater than 100'
            });
          } else if (score >= 90) {
            student.score = 'A';
          } else if (score >= 80) {
            student.score = 'B';
          } else if (score >= 70) {
            student.score = 'C';
          } else {
            student.score = 'D';
          }
        }
      }
    }
  );
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.Teacher);
  };
  return Student;
};

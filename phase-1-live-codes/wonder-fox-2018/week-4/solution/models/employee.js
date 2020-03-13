'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name is required'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Last name is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email is not valid'
        },
        // Using async/await
        isUnique: async function (value, next) {
          const id = Number(this.id);
          const params = { where: { email: value } };
          try {
            const employee = await Employee.findOne(params);
            if (employee && employee.id !== id) {
              next('Email already exists');
            } else {
              next();
            }
          } catch (error) {
            console.log(error);
          }
        }
        // Using promise:
        // isUnique: function (value, next) {
        //   const id = Number(this.id);
        //   const params = { where: { email: value } };
        //   Employee
        //     .findOne(params)
        //     .then(function (employee) {
        //       if (employee && employee.id !== id) {
        //         next('Email already exists');
        //       } else {
        //         next();
        //       }
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     });
        // }
      }
    },
    totalPoints: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    Employee.hasMany(models.Task);
  };

  Employee.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  }

  return Employee;
};

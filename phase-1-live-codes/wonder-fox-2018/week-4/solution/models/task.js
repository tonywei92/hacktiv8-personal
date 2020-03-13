'use strict';

module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title is required'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description is required '
        }
      }
    },
    points: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Points is not valid (Enter a number)'
        }
      }
    },
    isComplete: {
      type: DataTypes.BOOLEAN
    },
    EmployeeId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Employee name is required'
        }
      }
    }
  }, {
    hooks: {
      afterUpdate: async (task, options) => {
        const { Employee } = require('./index.js');
        try {
          const EmployeeId = Number(task.EmployeeId);
          const employee = await Employee.findById(EmployeeId);
          const previousPoints = employee.totalPoints;
          const updatedPoints = task.points + previousPoints;

          const newValues = {
            ...employee,
            totalPoints: updatedPoints
          };

          const params = { where: { id: EmployeeId } };

          await Employee.update(newValues, params);
        } catch (error) {
          console.log(error);
        }
      }
    }
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Employee);
  };

  Task.prototype.getStatus = function () {
    return this.isComplete === true ? 'Completed' : 'Not completed yet'
  }

  return Task;
};

'use strict';

const hitungProfit = require('../helpers/hitungProfit')
module.exports = (sequelize, DataTypes) => {
  const Robot = sequelize.define('Robot', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2],
          msg: 'Oops minimum character input is 2'
        }
      }
    },
    stock: {
      type: DataTypes.STRING,
      validate: {
        mininumStock(value) {
          if (value < 0 ) {
            throw new Error(`Oops, Robot ${this.name} out of stock`)
          }
        },
        max: {
          args: 1000,
          msg: 'Oops maximum stock input is 1000'
        },
        min: {
          args: 1,
          msg: 'Oops you must buy minimal 1 item'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: "Minimum input price is 1"
        },
        max: {
          args: 1000000,
          msg: "Maximum input price is 10000000"
        }
      }
    },
    FactoryId: DataTypes.INTEGER
  }, {
    hooks: {
      afterCreate: function(robot, options) {
        return hitungProfit(sequelize, robot, options);
      },
      afterUpdate: function(robot, options) {
        return hitungProfit(sequelize, robot, options);
      },
     
    }
  });
  Robot.associate = function(models) {
    Robot.belongsTo(models.Factory)
  };
  return Robot;
};

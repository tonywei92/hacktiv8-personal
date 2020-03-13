'use strict';
const getRandomNumber = require("../helpers/getRandomNumber")
module.exports = (sequelize, DataTypes) => {
  const { Op } = sequelize
  const FlightSchedule = sequelize.define('FlightSchedule', {
    boardingTime: {
      type: DataTypes.DATE,
      validate: {
        isAfter: new Date().toISOString().slice(0, 10),
        async checkSchedule(time) {
          let tomorrow = new Date(time.getTime()+((1)*24*60*60*1000))
          console.log(this.airplane, "===")
          try {
            const schedule = await FlightSchedule.findOne({
              where: {
                boardingTime: {
                  [Op.lt]: tomorrow,
                  [Op.gte]: time
                },
                airplane: this.airplane
              }
            })
            if (schedule) {
              throw new Error(`There is another schedule for ${schedule.airplane} at ${new Date().toISOString().slice(0, 10)}`)
            }
          } catch (error) {
            throw error
          }
        }
      }
    },
    flightNumber: {
      type: DataTypes.STRING
    },
    businessClassCost: DataTypes.FLOAT,
    firstClassCost: DataTypes.FLOAT,
    economyClassCost: DataTypes.FLOAT,
    AirportId: DataTypes.INTEGER,
    airplane: {
      type: DataTypes.STRING,
      async checkAirplane(val) {
        try {
          const airplane = await sequelize.models.Airplane({
            type: val
          })
          if (!airplane) {
            throw new Error(`Airplane type ${val} not found`)
          }
        } catch (error) {
          throw error
        }
      }
    }
  }, {
    hooks: {
      async beforeSave(schedule, options) {
        try {
          const { Airplane } = sequelize.models
          const airplane = await Airplane.findOne({
            where: {
              type: schedule.airplane
            }
          })
          schedule.getFlightNumber(airplane.type)
          schedule.setCost(airplane.cost * 0.05)
        } catch (error) {
          throw error
        }
      },
    }
  });
  FlightSchedule.associate = function(models) {
    // associations can be defined here
    FlightSchedule.belongsTo(models.Airport)
  };

  FlightSchedule.prototype.setCost = function(cost) {
    this.economyClassCost = cost * 1.75
    this.firstClassCost = cost * 2.25
    this.businessClassCost = cost * 3
  }

  FlightSchedule.prototype.getFlightNumber = function() {
    this.flightNumber = `${this.airplane.slice(0, 3)}-${getRandomNumber(100, 999)}-${this.boardingTime.getDate()}`
  }
  return FlightSchedule;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toISOString().slice(0, 10),
          msg: "You can only create an event for tomorrow or later"
        }
      }
    },
    RestaurantId: DataTypes.INTEGER,
    free: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        cantBeSetToFalseAfterTrue(val) {
          if (this._previousDataValues.free && !val) {
            throw new Error("You must keep your promise to treat everyone")
          }
        }
      }
    },
    maxParticipants: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 3,
          msg: "Maximum participants should be greater or equal to three"
        },
        cantBeLessThanParticipants(value) {
          if (value < this.participants) {
            throw new Error("Maximum participant can't be set less than number of already confirming participants")
          }
        }
      }
    },
    participants: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        cantBeMoreThanMaxParticipants(value) {
          if (value > this.maxParticipants) {
            throw new Error("Sorry, maximum participants already reached")
          }
        }
      }
    },
  }, {
      hooks: {
        beforeDestroy(schedule) {
          if (schedule.participants > 0) {
            let err = new sequelize.Sequelize.ValidationErrorItem(
              `Sorry, you can't delete this event, ${schedule.participants} people already confirmed to come.`,
              null, null, null, null,
              'cantDelete')
            throw err
          }
        }
      }
    });

  Schedule.associate = function (models) {
    // associations can be defined here
    Schedule.belongsTo(models.Restaurant)
  };

  Schedule.prototype.getAvailableSeats = function() {
    return this.maxParticipants - this.participants
  }

  return Schedule;
};
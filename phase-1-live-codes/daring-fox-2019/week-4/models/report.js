'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5,],
          msg: "Minimum title input is 5 Character"
        }
      }
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending"
    },
    prosecutor: {
      type: DataTypes.STRING,
      validate: {
        isSameWithDefendant(prosecutor) {
          if (this.defendant === prosecutor) {
            throw new Error("Prosecutor input cannot be same with defendant")
          }
        }
      }
    },
    defendant: {
      type: DataTypes.STRING,
      validate: {
        isSameWithProsecutor(defendant) {
          if (this.prosecutor === defendant) {
            throw new Error("Defendant input cannot be same with prosecutor")
          }
        }
      }
    },
    judgementDate: {
      type: DataTypes.DATE,
      validate: {
        isBefore: {
          args: new Date().toISOString().substring(0, 10),
          msg: `Date input must be today or before ${new Date().toISOString().substring(0, 10)}`
        }
      }
    },
    CourtId: DataTypes.INTEGER,
    noReport: DataTypes.STRING
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.Court)
  };

  Report.generate3Digit = (id) => {
    if (id >= 100) {
      return `${id}`
    } else if (id >= 10) {
      return `0${id}`
    } else {
      return `00${id}`
    }
  }


  Report.addHook("afterCreate", "generateNoReport", function(report, option) {
    report.noReport = Report.generate3Digit(report.id) + "-" + report.createdAt.toISOString().substring(0, 10).split("-").join("") + "-" + Report.generate3Digit(report.CourtId)
    return report.save()
  })
  return Report;
};
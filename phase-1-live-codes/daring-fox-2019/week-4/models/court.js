'use strict';
module.exports = (sequelize, DataTypes) => {
  const Court = sequelize.define('Court', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Court.associate = function(models) {
    // associations can be defined here
    Court.hasMany(models.Report)
  };

  Court.prototype.getReportStatus = function() {
    const reportStatus = {}
    this.Reports.forEach((report) => {
      if (!reportStatus[report.status]) {
        reportStatus[report.status] = 0
      }
      reportStatus[report.status] += 1
    })
    this.reportStatus = reportStatus
  }
  return Court;
};
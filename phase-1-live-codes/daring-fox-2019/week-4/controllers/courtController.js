const {
  Court,
  Report
} = require("../models")
const getDifferenceDate = require("../helpers/getDifferenceDate")
const getStatusColor = require("../helpers/getStatusColor")

module.exports = {
  getAll(req, res) {
    Court
      .findAll({
        include: [{
          model: Report
        }]
      })
      .then((courts) => {
        courts.forEach((court) => {
          court.getReportStatus()
          court.totalReport = Object.values(court.reportStatus).reduce((prev, curr) => prev + curr, 0)
        })
        res.render("pages/courts.ejs", {
          courts
        })
      })
      .catch((err) =>{
        res.send(err)
      })
  },
  getDetail(req, res) {
    const courtId = req.params.courtId
    Court
      .findByPk(courtId, {
        include: [{
          model: Report
        }]
      })
      .then((court) => {
        court.getReportStatus()
        res.render("pages/detailCourt.ejs", {
          court, 
          getDifferenceDate, 
          getStatusColor, 
          report: {}, 
          actionUrl: "/reports/" + courtId
        })
      })
      .catch((err) => {
        res.send(err)
      })
  }
}
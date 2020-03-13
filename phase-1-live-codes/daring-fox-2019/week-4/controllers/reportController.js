const {
  Report
} = require("../models")

module.exports = {
  createNewReport(req, res) {
    const {
      title, prosecutor, defendant, date, description
    } = req.body
    const {
      courtId
    } = req.params
    Report
      .create({
        title, 
        prosecutor, 
        defendant, 
        judgementDate: new Date(date), 
        description,
        CourtId: courtId
      })
      .then((newReport) => {
        res.redirect("/courts/" + courtId)
      })
      .catch((err) => {
        res.send(err)
      })
  },
  getReportDetail(req, res) {
    const reportId = req.params.reportId
    Report
      .findByPk(reportId)
      .then((report) => {
        res.render("pages/detailReport.ejs", {
          report,
          judgementDate: report.judgementDate.toISOString().slice(0, 10),
          actionUrl: "/reports/edit/" + reportId,
          setStatusUrl: "/reports/setStatus/" + reportId,
        })
      })
      .catch((err) => {
        res.send(err)
      })
  },
  editReport(req, res) {
    let reportId = req.params.reportId
    let {
      title, prosecutor, defendant, date, description
    } = req.body
    let report = null
    Report
      .findByPk(reportId)
      .then((foundReport) => {
        report = foundReport
        return report.update({
          title, 
          prosecutor, 
          defendant, 
          judgementDate: new Date(date), 
          description,
        })
      })
      .then(() => {
        res.redirect("/courts/" + report.CourtId)
      })
      .catch((err) => {
        res.send(err)
      })
  },
  setStatusReport(req, res) {
    let reportId = req.params.reportId
    let report = null
    Report
      .findByPk(reportId)
      .then((foundReport) => {
        report = foundReport
        return report.update({
          status: req.query.setStatus
        })
      })
      .then(() => {
        res.redirect("/courts/" + report.CourtId)
      })
      .catch((err) => {
        res.send(err)
      })
  },
}
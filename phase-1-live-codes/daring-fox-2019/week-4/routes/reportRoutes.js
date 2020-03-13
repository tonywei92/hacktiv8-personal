const router = require("express").Router()
const {
  createNewReport,
  getReportDetail,
  editReport,
  setStatusReport
} = require("../controllers/reportController")

router.get("/:reportId", getReportDetail)
router.post("/:courtId", createNewReport)
router.post("/edit/:reportId", editReport)
router.get("/setStatus/:reportId", setStatusReport)

module.exports = router
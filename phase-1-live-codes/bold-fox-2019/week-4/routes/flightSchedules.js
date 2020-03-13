const router = require("express").Router(),
      { createNewSchedule, getDetailSchedule, updateSchedule } = require("../controllers/flightScheduleController")

router.get("/:scheduleId", getDetailSchedule)
router.post("/:airportId", createNewSchedule)
router.post("/:scheduleId/update", updateSchedule)
module.exports = router
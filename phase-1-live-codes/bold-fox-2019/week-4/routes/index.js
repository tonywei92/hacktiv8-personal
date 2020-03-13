const router = require("express").Router(),
      fs = require("fs"),
      airportRoutes = require("./airports"),
      flightScheduleRoutes = require("./flightSchedules"),
      getPickerDateFormat = require("../helpers/getPickerDateFormat"),
      getTimeFormat = require("../helpers/getTimeFormat"),
      currencyFormat = require("../helpers/currencyFormat"),
      createUrlQuery = require("../helpers/createUrlQuery"),
      getColorFormat = require("../helpers/getColorFormat"),
      { Airplane } = require("../models")

router.get("/", (req, res) => {
  res.send("oke")
})
router.use(async (req, res, next) => {
  try {
    res.locals.airplanes = await Airplane.findAll()
    res.locals.createUrlQuery = createUrlQuery
    res.locals.getTimeFormat = getTimeFormat
    res.locals.getPickerDateFormat = getPickerDateFormat
    res.locals.currencyFormat = currencyFormat
    res.locals.getColorFormat = getColorFormat
    next()
  } catch (error) {
    res.send(error)
  }
})
router.use("/airports", airportRoutes)
router.use("/flightSchedules", flightScheduleRoutes)
module.exports = router
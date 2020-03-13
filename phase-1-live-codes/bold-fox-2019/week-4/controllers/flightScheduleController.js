const { FlightSchedule, Airplane } = require("../models")

module.exports = {
  createNewSchedule: async (req, res) => {
    try {
      const { airplane, boardingTime, destination} = req.body
      await FlightSchedule.create({
        boardingTime, 
        destination, 
        airplane,
        AirportId: req.params.airportId
      })
      res.redirect(`/airports/${req.params.airportId}`)
    } catch (error) {
      let message = ""
      if (error.name === "SequelizeValidationError") {
        message = error.errors[0].message
      } else {
        message = error.message
      }
      res.redirect("/airports/" + req.params.airportId + "?error=" + message)
    }
  },
  getDetailSchedule: async (req, res) => {
    try {
      const schedule = await FlightSchedule.findByPk(req.params.scheduleId)
      res.render("pages/detailSchedule.ejs", {
        schedule,
        actionUrl: `/flightSchedules/${req.params.scheduleId}/update`
      })
    } catch (error) {
      res.send(error)
    }
  },
  updateSchedule: async (req, res) => {
    try {
      const { airplane, boardingTime, destination} = req.body
      const schedule = await FlightSchedule.findByPk(req.params.scheduleId)
      schedule.boardingTime = boardingTime
      schedule.destination = destination
      schedule.AirplaneId = airplane
      await schedule.save()
      res.redirect(`/airports/${schedule.AirportId}`)
    } catch (error) {
      res.send(error)
    }
  }
}
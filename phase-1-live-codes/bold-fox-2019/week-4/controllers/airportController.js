const { Airport, Airplane, FlightSchedule } = require("../models")
module.exports = {
  getAllAirports: async (req, res) => {
    try {
      const airports = await Airport.findAll()
      res.render("pages/airports.ejs", {
        airports
      })
    } catch (error) {
      res.send(error)
    }
  },
  getDetailAirport: async (req, res) => {
    const { airportId } = req.params
    const fieldQ = req.query.field || "id"
    const orderBy = req.query.order || "ASC"
    try {
      const airport = await Airport.findByPk(airportId, {
        include: [{
          model: FlightSchedule
        }],
        order: [
          [FlightSchedule, fieldQ, orderBy]
        ]
      })
      const airplanes = await Airplane.findAll()
      res.render("pages/detailAirport.ejs", { 
        airport, 
        airplanes,
        order: orderBy,
        error: req.query.error || null
      })
    } catch (error) {
      res.send(error)
    }
  }
}
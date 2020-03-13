const router = require("express").Router(),
      { 
        getAllAirports,
        getDetailAirport
      } = require("../controllers/airportController")

router.get("/", getAllAirports)
router.get("/:airportId", getDetailAirport)
module.exports = router
const Gasoline = require("../models").Gasoline;
const Vehicle = require("../models").Vehicle;

// console.log(Gasoline)
class GasolineController {
  static showAll(req, res) {
    Gasoline.findAll({ order: [["id", "ASC"]], include: Vehicle })
      .then(gasolines => {
        res.render("showGas", { gasolines });
      })
      .catch(err => res.send(err.message));
  }

  static showVehicles(req, res) {
    let gasoline;
    Gasoline.findByPk(req.params.id)
      .then(gas => {
        gasoline = gas;
        return Vehicle.findAll({ where: { GasolineId: req.params.id } });
      })
      .then(vehicles => {
        res.render("showVehicles", { gasoline, vehicles });
      })
      .catch(err => res.send(err.message));
  }

  static addVehicles(req, res) {
    let gasoline;
    Gasoline.findByPk(req.params.id)
      .then(gas => {
        gasoline = gas;
        return Vehicle.create({
          name: req.body.name,
          maxFuel: req.body.maxFuel,
          GasolineId: req.params.id
        });
      })
      .then(vehicle => {
        res.redirect(`/gasolines/${req.params.id}`);
      })
      .catch(err => res.send(err.message));
  }
}

module.exports = GasolineController;

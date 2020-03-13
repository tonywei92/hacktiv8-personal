const Vehicle = require('../models').Vehicle
const Gasoline = require('../models').Gasoline
// console.log(Vehicle)
class VehicleController {

    static addFuel(req, res) {
        Vehicle.findByPk(res.query.id)
            .then(vehicle => {
                res.render('addFuelForm')
            })
            .catch(err => res.send(err.message))
    }


    static saveFuel(req, res) {
        Vehicle.findByPk(req.query.id)
            .then(vehicle => {
                vehicle.setDataValue('fuel', req.body.fuel)
            })
            .catch(err => res.send(err.message))
    }

    static delete(req, res) {
        Vehicle.findByPk(req.params.id)
        .then(vehicle=>{
            let gasolineId = vehicle.gasolineId
            return Vehicle.destroy({
                where: {
                    id: req.query.id
                }
            })
        })
        .then((count) => {
            res.redirect(`/gasoline/${gasolineId}`)
        })
        .catch(err => res.send(err.message))
    }
}

module.exports = VehicleController

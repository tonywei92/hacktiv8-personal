'use strict';
const { Farm, Plant } = require('../models');

class FarmController {
    static findAll(req, res) {
        Farm
            .findAll({
                order: [[ 'id' ]]
            })
            .then(farms => {
                res.render('farms/all', { farms });
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findOne(req, res) {
        const farmId = req.params.farmId;
        Farm
            .findOne({
                where: {
                    id: farmId
                },
                include: [ Plant ],
                order: [[ Plant, 'timeToHarvest' ]]
            })
            .then(farm => {
                let errQuery = [];
                if(req.query.err) {
                    errQuery = req.query.err;
                }
                res.render('farms/detail', { farm, errQuery });
            })
            .catch(err => {
                res.send(err)
            })
    }

    static nextDay(req, res) {
        const farmId = req.params.farmId;
        Farm
            .nextDay(farmId)
            .then(farm => {
                res.redirect(`/farms/${farmId}`);
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = FarmController;
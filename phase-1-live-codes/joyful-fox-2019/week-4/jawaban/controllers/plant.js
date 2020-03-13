'use strict';
const { Plant } = require('../models');

class PlantController {
    static create(req, res) {
        const farmId = req.params.farmId;
        const objCreate = {
            name: req.body.name,
            price: Number(req.body.price),
            timeToHarvest: Number(req.body.timeToHarvest),
            FarmId: Number(farmId)
        }
        Plant
            .create(objCreate)
            .then(plant => {
                res.redirect(`/farms/${farmId}`)
            })
            .catch(err => {
                const message = err.message
                    .split('Validation error: ')
                    .join('')
                    .split(',')
                    .map((message,index) => `err[e${index}]=${message}`)
                    .join('&');
                res.redirect(`/farms/${farmId}?${message}`);
            })
    }

    static harvest(req, res) {
        const { plantId, farmId } = req.params;
        Plant
            .destroy({
                where: {
                    id: plantId
                },
                individualHooks: true
            })
            .then(() => {
                res.redirect(`/farms/${farmId}`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = PlantController;
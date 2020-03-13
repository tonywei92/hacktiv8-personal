'use strict';
const express = require('express');
const FarmController = require('../controllers/farm');
const PlantController = require('../controllers/plant');

const router = express.Router();

router.get('/', FarmController.findAll);
router.get('/:farmId', FarmController.findOne);
router.post('/:farmId', PlantController.create);
router.get('/:farmId/sleep', FarmController.nextDay);

module.exports = router;
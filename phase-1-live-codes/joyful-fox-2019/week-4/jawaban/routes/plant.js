'use strict';
const express = require('express');
const PlantController = require('../controllers/plant');

const router = express.Router();

router.get('/:farmId/:plantId/harvest', PlantController.harvest);

module.exports = router;
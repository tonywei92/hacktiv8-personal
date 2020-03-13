const express = require('express');
const router = express.Router();

const RootController = require('../controllers/');
const employeesRoutes = require('./employees');
const tasksRoutes = require('./tasks');

router.get('/', RootController.index);
router.use('/employees', employeesRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;

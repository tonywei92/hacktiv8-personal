const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get('/', StudentController.index)

router.get('/add', StudentController.add)

router.post('/add', StudentController.save)

module.exports = router;
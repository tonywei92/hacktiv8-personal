const express = require('express');
const router = express.Router();

const bank = require('./bank');
const customer = require('./customer');

router.get('/', function(req, res) {
  res.render('index');
});

router.use('/banks', bank);
router.use('/customers', customer);

module.exports = router;

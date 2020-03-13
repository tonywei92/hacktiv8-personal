const express = require('express');
const router = express.Router();

const moviesRoutes = require('./movies');
const rentsRoutes = require('./rents');

router.get('/', function (req, res) {
  res.render('index');
});

router.use('/movies', moviesRoutes);
router.use('/rents', rentsRoutes);

module.exports = router;

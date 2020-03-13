const express = require('express');
const router = express.Router();

const booksRoutes = require('./books');
const loansRoutes = require('./loans');

router.get('/', function (req, res) {
  res.render('index');
});

router.use('/books', booksRoutes);
router.use('/loans', loansRoutes);

module.exports = router;

const express = require('express');
const router = express.Router();

const booksRoutes = require('./books');
const membersRoutes = require('./members');
const loansRoutes = require('./loans');

router.use('/books', booksRoutes);
router.use('/members', membersRoutes);
router.use('/loans', loansRoutes);

module.exports = router;

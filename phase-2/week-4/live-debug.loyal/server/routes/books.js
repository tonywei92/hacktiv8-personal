const express = require('express');
const router = express.Router();

const BookController = require('../controllers/book');

router.post('/', BookController.create);

module.exports = router;

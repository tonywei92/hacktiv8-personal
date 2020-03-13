const express = require('express');
const router = express.Router();
const NewsController = require('../controller/NewsController');

router.get('/', NewsController.getNews);

module.exports = router;
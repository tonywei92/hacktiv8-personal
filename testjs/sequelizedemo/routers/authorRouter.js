const express = require("express");
const router = express.Router();
const AuthorController = require('../controllers/AuthorController');
router.get("/", AuthorController.index);

router.get('/add', AuthorController.add)

router.post('/add', AuthorController.create)

module.exports = router;

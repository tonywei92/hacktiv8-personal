const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/AuthorController");
router.get("/", AuthorController.all);
router.get("/addPhone", AuthorController.addPhone);

module.exports = router;

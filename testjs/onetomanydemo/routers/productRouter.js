const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.index);

router.get("/add", ProductController.add);

module.exports = router;

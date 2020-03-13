const express = require('express');
const router = express.Router();
const { authentication } = require('../middlewares/auth');
const comicController = require('../controllers/comicController');

router.use(authentication);
router.get("/", comicController.showAll);
router.put("/:id", comicController.updateById);

module.exports = router;
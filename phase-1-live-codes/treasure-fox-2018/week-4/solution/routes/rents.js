const express = require('express');
const router = express.Router();

const RentsController = require('../controllers/rents');

router.get('/', RentsController.index);
router.post('/', RentsController.create);
router.get('/:id/return', RentsController.return);

module.exports = router;

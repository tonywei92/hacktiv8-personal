const express = require('express');
const router = express.Router();

const LoansController = require('../controllers/loans');

router.get('/', LoansController.index);
router.post('/', LoansController.create);
router.get('/:id/return', LoansController.return);

module.exports = router;

const express = require('express');
const router = express.Router();

const LoanController = require('../controllers/loan');

router.post('/', LoanController.create);
router.get('/', LoanController.find);
router.patch('/:id', LoanController.returnALoan);

module.exports = router;

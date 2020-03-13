const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employees');

router.get('/', EmployeeController.index);
router.get('/add', EmployeeController.add);
router.post('/add', EmployeeController.save);
router.get('/:id/edit', EmployeeController.edit);
router.post('/:id/edit', EmployeeController.update);
router.get('/:id/delete', EmployeeController.delete);

module.exports = router;

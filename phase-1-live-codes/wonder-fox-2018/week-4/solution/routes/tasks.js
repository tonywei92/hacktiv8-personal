const express = require('express');
const router = express.Router();

const TasksController = require('../controllers/tasks');

router.get('/', TasksController.index);
router.get('/add', TasksController.add);
router.post('/add', TasksController.create);
router.get('/:id/mark-as-completed', TasksController.markAsCompleted);
router.get('/:id/delete', TasksController.delete);

module.exports = router;

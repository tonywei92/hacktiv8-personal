const express = require('express');
const router = express.Router();

const MoviesController = require('../controllers/movies');

router.get('/', MoviesController.index);
router.post('/', MoviesController.create);
router.get('/:id/edit', MoviesController.edit);
router.post('/:id/edit', MoviesController.update);
router.get('/:id/delete', MoviesController.destroy);

module.exports = router;

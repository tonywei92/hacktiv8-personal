const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/books');

router.get('/', BooksController.index);
router.post('/', BooksController.create);
router.get('/:id/edit', BooksController.edit);
router.post('/:id/edit', BooksController.update);
router.get('/:id/delete', BooksController.destroy);

module.exports = router;

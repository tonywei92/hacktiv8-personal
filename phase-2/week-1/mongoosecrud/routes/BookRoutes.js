const router = require('express').Router();
const BookController = require('../controllers/BookController');
router.get('/', BookController.index);
router.get('/search', BookController.findByKeyword);
router.post('/', BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.destroy);
module.exports = router;
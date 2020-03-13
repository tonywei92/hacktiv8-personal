const router = require('express').Router();
const TransactionController = require('../controllers/TransactionController');
router.get('/', TransactionController.index);
router.get('/bybookid/:bookid', TransactionController.findByBookId);
router.post('/', TransactionController.create);
router.patch('/:id', TransactionController.update);
router.delete('/:id', TransactionController.destroy);
module.exports = router;
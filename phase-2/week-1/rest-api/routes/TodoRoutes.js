const router = require('express').Router();
const TodoController = require('../controllers/apis/TodoController');
const { Authenticated, OwnerOnly } = require('../middlewares');

router.use(Authenticated);
router.get('/', TodoController.index);
router.post('/', TodoController.create);

router.use('/:id', OwnerOnly);
router.get('/:id', TodoController.show);
router.delete('/:id', TodoController.destroy);
router.put('/:id', TodoController.put);
router.patch('/:id', TodoController.patch);

module.exports = router;

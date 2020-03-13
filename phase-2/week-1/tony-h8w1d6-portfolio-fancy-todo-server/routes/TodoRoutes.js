const router = require('express').Router();
const AuthenticationMiddleware = require('../middlewares/Authentication');
const TodoAuthorizationMiddleware = require('../middlewares/TodoAuthorization');

router.use(AuthenticationMiddleware);
const TodoController = require('../controllers/TodoController');

router.get('/', TodoController.index);
router.get('/:id', TodoAuthorizationMiddleware, TodoController.show);
router.post('/', TodoController.create);
router.put('/:id', TodoAuthorizationMiddleware, TodoController.update);
router.delete('/:id', TodoAuthorizationMiddleware, TodoController.destroy);
module.exports = router;

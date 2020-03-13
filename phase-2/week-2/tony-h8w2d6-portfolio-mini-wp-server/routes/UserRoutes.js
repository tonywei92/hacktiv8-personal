const router = require('express').Router();
const UserController = require('../Controllers/UserController');
const { adminAuthorization } = require('../middlewares/authorization');


router.get('/', adminAuthorization, UserController.index);
router.post('/register', UserController.create);
router.post('/login', UserController.login);
router.put('/', UserController.update);
router.put('/:id', adminAuthorization, UserController.update);
router.delete('/:id', adminAuthorization, UserController.destroy);

module.exports = router;

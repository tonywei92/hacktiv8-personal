const router = require('express').Router();
const passwordController = require('../controllers/PasswordController');
const authentication = require('../middlewares/authentication');
const { hasPasswordAccess } = require('../middlewares/authorization');

router.use(authentication);
router.get('/', passwordController.index);
router.post('/', passwordController.create);

router.use('/:id',hasPasswordAccess);
router.delete('/:id', passwordController.destroy);

module.exports = router;
'use strict';

const router = require('express').Router();
const UserController = require('../controllers/UserController');
const PasswordController = require('../controllers/PasswordController');

const { authentication, authorization } = require('../middlewares/auth');

router.post('/auth/register', UserController.register);
router.post('/auth/login', UserController.login);

router.use(authentication);
router.post('/passwords', PasswordController.create);
router.get('/passwords', PasswordController.find);

router.get('/passwords/:id', authorization, PasswordController.findById);
router.delete('/passwords/:id', authorization, PasswordController.delete);

module.exports = router;
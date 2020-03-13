const express = require('express');
const router = express.Router();

const { authenticate, authorization } = require('../middlewares/auth');

const UserController = require('../controllers/user');
const NasaController = require('../controllers/nasa');


router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.use(authenticate);

router.get('/astronomyPic', NasaController.generateApod);
router.get('/favorites', NasaController.findApod);
router.post('/favorites', NasaController.createApod);
router.delete('/favorites/:id', authorization, NasaController.remove);

module.exports = router;

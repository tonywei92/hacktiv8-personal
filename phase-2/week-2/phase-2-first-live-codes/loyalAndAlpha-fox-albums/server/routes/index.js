const express = require('express');
const router = express.Router();

const { authenticate, authorization } = require('../middlewares/auth');

const UserController = require('../controllers/user');
const FavController = require('../controllers/favorite');


router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.use(authenticate);

router.get('/album/:artistName', FavController.searchAlbum);
router.get('/favorites', FavController.findFav);
router.post('/favorites', FavController.createFav);
router.delete('/favorites/:id', authorization, FavController.remove);

module.exports = router;

const routes = require('express').Router();
const UserController = require('../controllers/UserController');

routes.get('/', UserController.index);
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.get('/login/getgoogleoauth', UserController.getGoogleOauthUrl);
routes.get('/login/googleoauth', UserController.authorizeGoogleOauth);

module.exports = routes;
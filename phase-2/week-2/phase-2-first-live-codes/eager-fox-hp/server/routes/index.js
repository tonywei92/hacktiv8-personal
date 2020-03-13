const routes = require('express').Router();
const UserControllers = require("../controllers/user")
const PlayerControllers = require("../controllers/player")
const auth = require("../middlewares/auth")
const addPlayerValidation = require("../middlewares/playerValidation")

routes.post('/register', UserControllers.register);
routes.post("/login", UserControllers.login);

routes.use(auth.authentication)
routes.get('/players',  PlayerControllers.read)
routes.post('/players', addPlayerValidation, PlayerControllers.create)

routes.delete('/players/:playerId', auth.authorization, PlayerControllers.remove)

module.exports = routes



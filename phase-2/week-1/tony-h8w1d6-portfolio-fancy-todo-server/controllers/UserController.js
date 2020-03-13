const { User } = require('../models')
const AuthService = require('../services/AuthService');

class UserController {
    static index(req, res, next) {
        User.find({}, function (err, users) {
            if (err) {
                next(err);
            }
            else {
                res.json(users);
            }
        })
    }

    static register(req, res, next) {
        const { fullname, email, password } = req.body;
        AuthService.register(fullname, email, password)
            .then(user => {
                const userObj = user.toObject();
                delete userObj.password;
                res.status(201).json(userObj);
            })
            .catch(next)
    }

    static login(req, res, next) {
        const { email, password } = req.body;
        AuthService.getCredential(email, password)
            .then(token => res.json({ token }))
            .catch(next)
    }

    static getGoogleOauthUrl(req, res, next) {
        res.send(AuthService.getGoogleOauthUrl());
    }

    static authorizeGoogleOauth(req, res, next) {
        const { code } = req.query;
        AuthService.authorizeGoogleOauth(code)
            .then((token) => res.json({ token }))
            .catch(next);
    }

    static show(req, res, next) {

    }
}

module.exports = UserController;
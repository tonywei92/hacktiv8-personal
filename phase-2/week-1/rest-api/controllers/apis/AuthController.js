"use strict";

const { User } = require('../../models');
const Bcrypt = require('../../utils/encryption/Bcrypt');
const jwt = require('jsonwebtoken');
var createError = require('http-errors')

class AuthController {
    static register(req, res) {
        const { username, password } = req.body;
        User.create({ username, password: Bcrypt.hash(password) })
            .then(user => res.json({ message: "user created" }))
            .catch(next)
    }

    static login(req, res, next) {
        const { username, password } = req.body;
        User.findOne({
            where: {
                username
            }
        })
            .then(user => {
                if (!user) {
                    throw createError(404, `Wrong username or password`)
                }
                else {
                    if (Bcrypt.validate(password, user.password)) {
                        res.json({ token: jwt.sign(user.toJSON(), process.env.AUTH_SECRET) });
                    }
                    else {
                        throw createError(401, `Wrong username or password`);
                    }
                }
            })
            .catch(next)
    }
}

module.exports = AuthController;
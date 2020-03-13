'use strict';

const User = require('../models/user');
const bcrypt = require('../helpers/bcrypt');
const { generateToken } = require('../middlewares/jwt');

class UserController {
    static register(req, res, next) {
        const { email, password } = req.body;
        User.create({
            email,
            password
        })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(next);
    }

    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({ email })
        .then(user => {
            if(!user) {
                next({ status: 404, message: 'email/password wrong'})
            } else {
                if(bcrypt.compareHash(password, user.password)) {
                    const token = generateToken({ user });
                    res.status(200).json({
                        _id: user._id,
                        email: user.email,
                        token: token
                    });
                } else {
                    next({ status: 404, message: 'email/password wrong'});
                }
            }
        })
        .catch(next)
    }
}

module.exports = UserController;
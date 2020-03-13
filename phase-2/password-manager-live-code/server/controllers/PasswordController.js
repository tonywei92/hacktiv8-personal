'use strict';

const Password = require('../models/password');

class PasswordController {
    static find(req, res, next) {
        Password.find({})
        .then(listPasswords => {
            res.status(200).json(listPasswords);
        })
        .catch(next)
    }

    static findById(req, res, next) {
        const id = req.params.id;
        Password.findById(id)
        .then(password => {
            res.status(200).json(password);
        })
        .catch(next)
    }

    static create(req, res, next) {
        const { url, username, password } = req.body;
        const UserId = req.userLoggedIn.user._id;
        Password.create({
            url,
            username,
            password,
            UserId
        })
        .then(passwordCreate => {
            res.status(201).json(passwordCreate);
        })
        .catch(next);
    }

    static delete(req, res, next) {
        const id = req.params.id;
        Password.findByIdAndDelete({ _id: id})
        .then(response => {
            res.status(200).json(response)
        })
        .catch(next);
    }
}

module.exports = PasswordController;
const { Password } = require('../models');

class PasswordController {
    static index(req, res, next) {
        const { _id: userId } = req.user;
        Password.find({ owner: userId })
            .then(passwords => res.json(passwords))
            .catch(next);
    }

    static show(req, res, next) {
        const { id: passwordId } = req.params;
        Password.findOne({ _id: passwordId })
            .then(password => {
                if (!password) throw { status: 404, resource: "Password" }
                res.json(password);
            })
            .catch(next);
    }

    static create(req, res, next) {
        const { _id: userId } = req.user;
        const { url, username, password } = req.body;
        Password.create({ url, username, password, owner: userId })
            .then(password => res.json(password))
            .catch(next);
    }

    static destroy(req, res, next) {
        const { id } = req.params;
        Password.deleteOne({ _id: id })
            .then(() => res.status(204).json({}))
            .catch(next);
    }
}

module.exports = PasswordController;
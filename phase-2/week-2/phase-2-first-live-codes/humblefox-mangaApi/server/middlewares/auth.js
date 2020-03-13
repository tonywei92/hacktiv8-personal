const User = require('../models/user')
const Manga = require('../models/manga')
const { decode } = require('../helpers/jwt')
module.exports = {
    authentication: function(req, res, next) {
        try {
            const currentUser = decode(req.headers["access_token"])
            return User.findOne({
                _id: currentUser.id
            })
            .then(user => {
                if(user) {
                    req.decode = currentUser
                    next()
                } else {
                    next({
                        status: 401,
                        message: "access unauthorized"
                    })
                }
            })
        } catch(err) {
            next(err)
        }
    },
    authorization: function(req, res, next) {
        Manga.findOne({
            _id: req.params.id
        })
        .then(manga => {
            if(manga) {
                if(manga.ownerId == req.decode.id) {
                    next()
                } else {
                    next({
                        status: 401,
                        message: 'unauthorized'
                    })
                }
            } else {
                next({
                    status: 404,
                    message: 'not found'
                })
            }
        })
        .catch(err => next(err))
    }
}
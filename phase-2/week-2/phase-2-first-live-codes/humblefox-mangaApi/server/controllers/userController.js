const User = require('../models/user')
const { comparePassword } = require('../helpers/passwordHelper')
const { signToken } = require('../helpers/jwt')

class UserController {
    static create(req, res, next) {
        const { email, password } = req.body
        User.create({
            email,
            password
        })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(next)
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({ email })
            .then(user => {
                console.log('here,' , user, email, password)
                if(user) {
                    const id = user._id
                    if(comparePassword(password, user.password)) {
                        res.status(200).json({
                            "access_token" : signToken({ id })
                        })
                    } else {
                        throw ({
                            status: 401,
                            message: 'Wrong username/ password'
                        })
                    }
                } else {
                    throw ({
                        status: 401,
                        message: 'Wrong username/ password'
                    })
                }
            })
            .catch(next)

    }
}

module.exports = UserController
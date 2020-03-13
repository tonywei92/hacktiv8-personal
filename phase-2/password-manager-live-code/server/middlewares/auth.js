'use strict';

const { verifyToken } = require('./jwt');
const User = require('../models/user');
const Password = require('../models/password');

function authentication(req, res, next) {
    // console.log('req headers', req.headers)
    if(req.headers.hasOwnProperty('authorization')) {
        try {
            let token = req.headers.authorization.split(' ')[1];
            req.userLoggedIn = verifyToken(token);
            // console.log(req.userLoggedIn.user._id)
            User.findById( req.userLoggedIn.user._id )
            .then(user => {
                if(user) {
                    next();
                } else {
                    next({ status: 400, message: 'Invalid access' });
                }
            })
            .catch(next);
        } catch (err) {
            next(err)
        }
    } else {
        next({ status: 400, message: 'You must log in first' });
    }
}

function authorization(req, res, next) {
    let UserId = req.userLoggedIn.user._id;
    Password.findById( req.params.id )
    .then(password => {
        if(password) {
            if(String(password.UserId) === UserId) {
                next();
            } else {
                next({ status: 400, message: 'Unauthorize' })
            }
        } else {
            next({ status: 400, message: 'Data not found' })
        }
    })
    .catch(next)
}

module.exports = {
    authentication,
    authorization
}
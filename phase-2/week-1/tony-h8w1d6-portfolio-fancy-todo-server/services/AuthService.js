
const { User } = require('../models');
const Bcrypt = require('../lib/Bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const { google } = require('googleapis');

// google oauth2 client
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_API_CLIENT_ID,
    process.env.GOOGLE_API_CLIENT_SECRET,
    'http://localhost:8000'
);

const scopes = ['profile', 'email'];

const googleOauthUrl = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    scope: scopes
})

module.exports = {
    register: (fullname, email, password) => {
        return new Promise((resolve, reject) => {
            User.create({
                fullname, email, password: Bcrypt.hash(password)
            }, function (err, user) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(user);
                }
            });
        })
    },
    getCredential: (email, password) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                email,
            }, function (err, user) {
                if (err) {
                    return reject(err);
                }

                if (!user) {
                    return reject(createError(404, "Invalid credentials"));
                }
                if (!Bcrypt.compare(password, user.password)) {
                    reject(createError(404, "Invalid credentials"));
                }
                else {
                    const userObj = user.toObject();
                    userObj.password = password;
                    resolve(jwt.sign(userObj, process.env.JWT_SECRET));
                }
            })
        })
    },
    getGoogleOauthUrl: () => {
        return googleOauthUrl;
    },
    authorizeGoogleOauth: code => {
        return oauth2Client.getToken(code)
            .then(data => {
                const { tokens } = data;
                oauth2Client.setCredentials(tokens);
                const oauth2 = google.oauth2({
                    version: "v2",
                    auth: oauth2Client
                })
                return new Promise((resolve, reject) => {
                    oauth2.userinfo.get(function (err, result) {
                        if (err) {
                            return reject(err)
                        }
                        const { email, name } = result.data;
                        User.findOne({ email }, function (err, user) {
                            if (err) {
                                return reject(err);
                            }
                            if (!user) {
                                User.create({ fullname: name, email }, function (err, user) {
                                    if (err) {
                                        return reject(err)
                                    }
                                    const userObj = user.toObject();
                                    userObj.tokens = tokens;
                                    resolve(jwt.sign(userObj, process.env.JWT_SECRET));
                                })
                            }
                            else {
                                const userObj = user.toObject();
                                userObj.tokens = tokens;
                                resolve(jwt.sign(userObj, process.env.JWT_SECRET));
                            }
                        })
                    });
                })
            });
    }

}
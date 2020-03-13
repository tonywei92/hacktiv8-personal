const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const AuthService = require('../services/AuthService');
const { google } = require('googleapis');

// google oauth2 client
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_API_CLIENT_ID,
    process.env.GOOGLE_API_CLIENT_SECRET,
    'http://localhost:8000'
);

module.exports = (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        next(createError(401, "Unauthenticated"));
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                next(createError(401, "Unathenticated"));
            }
            else {
                req.user = decoded;
                if (req.user.tokens) {
                    try {
                        oauth2Client.setCredentials(req.user.tokens);
                        next();
                    }
                    catch (err) {
                        next(createError(401, err));
                    }
                }
                else {
                    const { email, password } = decoded;
                    AuthService.getCredential(email, password)
                        .then(() => {
                            next();
                        })
                        .catch(err => next(createError(401, err)));
                }
            }
        })

    }
}
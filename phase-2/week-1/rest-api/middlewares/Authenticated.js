const jwt = require('jsonwebtoken');
const createError = require('http-errors')
module.exports = function (req, res, next) {
    console.log(req.params)
    if (req.headers.hasOwnProperty("token")) {
        const { token } = req.headers;
        try {
            const user = jwt.verify(token, process.env.AUTH_SECRET)
            req.user = user;
            next();
        }
        catch (err) {
            next(createError(401, err.message));
        }
    }
    else {
        next(createError(401, "unauthenticated"))
    }
}
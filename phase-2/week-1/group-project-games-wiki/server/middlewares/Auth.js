var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded.foo)
}
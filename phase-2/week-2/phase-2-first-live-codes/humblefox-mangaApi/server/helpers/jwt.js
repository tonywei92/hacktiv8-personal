const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    signToken(payload) {
        return jwt.sign(payload, JWT_SECRET)
    },
    decode(token) {
        return jwt.verify(token, JWT_SECRET)
    }
}
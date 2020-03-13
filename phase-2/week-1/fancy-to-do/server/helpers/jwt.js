const jwt = require('jsonwebtoken')

function generateToken(payload) {
  console.log(payload, process.env.JWT_SECRET)

  let token = jwt.sign(payload, process.env.JWT_SECRET)
  return token
}

function verifyToken(token) {
  let payload = jwt.verify(token, process.env.JWT_SECRET)
  return payload
}

module.exports = {
  generateToken,
  verifyToken
}

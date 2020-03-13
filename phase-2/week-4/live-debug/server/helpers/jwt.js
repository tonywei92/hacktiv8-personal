const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
exports.generateToken = function(payload) {
  return jwt.sign(payload, SECRET);
};

exports.verifyToken = function(payload) {
  return jwt.verify(payload, SECRET);
};

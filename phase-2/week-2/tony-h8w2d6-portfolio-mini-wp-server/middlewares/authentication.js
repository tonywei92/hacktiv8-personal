const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const { User } = require('../models');

module.exports = (req, res, next) => {
  const { token } = req.headers;
  if (!token) return next(createError(401, 'Unauthenticated'));
  let currentUser = {};
  try {
    currentUser = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return next(err);
  }
  User.findById(currentUser._id)
    .then(user => {
      if (!user) throw createError(404, 'User not found');
      if (currentUser.password !== user.password) throw createError(401, 'Unauthenticated');
    })
    .catch(next);
  req.user = currentUser;
  return next();
};

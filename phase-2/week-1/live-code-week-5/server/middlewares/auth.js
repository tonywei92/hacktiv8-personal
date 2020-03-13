const createError = require('http-errors');
const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

module.exports = {
  authentication: async function (req, res, next) {
    const { access_token } = req.headers;
    try {
      const verified = verifyToken(access_token);
      const foundUser = await User.findOne({
        where: {
          email: verified.email
        }
      });
      
      if (foundUser) {
        req.headers.user = foundUser;
        next();
      }
      else {
        next(createError(400));
      }
    } catch (err) {
      next(err);
    }
  }
};

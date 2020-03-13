const { verifyToken } = require('../helpers/jwt');
const { Teacher } = require('../models');

module.exports = function(req, res, next) {
  try {
    const access_token = req.headers.access_token;
    req.teacher = verifyToken(access_token);
    Teacher.findOne({
      where: {
        id: req.teacher.id
      }
    })
      .then(response => {
        next()
        if (response) {
          next();
        } else {
          next({
            status: 401,
            message: 'Authentication failed'
          });
        }
      })
      .catch(err => next(err));
  } catch (err) {
    next(err);
  }
};

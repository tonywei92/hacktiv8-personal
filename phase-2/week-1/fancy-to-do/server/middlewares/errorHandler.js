const errorHelper = require('')

module.exports = function(err, req, res, next) {
  let error2send = errorHelper
  res.status(err.statusCode).json(err)
}

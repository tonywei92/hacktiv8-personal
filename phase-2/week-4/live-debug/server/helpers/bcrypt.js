const bcrypt = require('bcryptjs');
exports.hashPassword = function(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

exports.comparePassword = function(password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword);
};

const bcrypt = require('bcrypt');

module.exports = {
  hashPassword: function(plainPassword) {
    return bcrypt.hashSync(plainPassword, 10);
  },
  checkPassword: function(plainPassword, hash) {
    let status = bcrypt.compareSync(plainPassword, hash);
    return status;
  }
}

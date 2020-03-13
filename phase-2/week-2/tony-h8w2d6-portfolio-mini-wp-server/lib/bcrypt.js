const bcrypt = require('bcrypt');

const hash = (password) => bcrypt.hashSync(password, 10);

const verify = (password, passwordHash) => bcrypt.compareSync(password, passwordHash);

module.exports = { hash, verify };

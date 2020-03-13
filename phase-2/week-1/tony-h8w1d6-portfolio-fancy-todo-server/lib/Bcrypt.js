const bcrypt = require('bcrypt');

module.exports = {
    hash: (password) => {
        return bcrypt.hashSync(password, 10);
    },
    compare: (plainPassword, hashPassword) => {
        return bcrypt.compareSync(plainPassword, hashPassword);
    }
}
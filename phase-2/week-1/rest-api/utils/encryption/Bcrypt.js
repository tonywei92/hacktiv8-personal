const bcrypt = require('bcrypt');

class Bcrypt {
    static hash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    }

    static validate(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}

module.exports = Bcrypt;
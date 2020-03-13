'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 8;

module.exports = {
    generateHash(password) {
        return bcrypt.hashSync(password, saltRounds);
    },
    compareHash(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}
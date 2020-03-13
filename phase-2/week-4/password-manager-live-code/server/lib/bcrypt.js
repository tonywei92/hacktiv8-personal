const bcrypt = require('bcrypt');

function hash(password){
    return bcrypt.hashSync(password, 10);
}

function verify(password, hashedPassword){
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
    hash, verify
}

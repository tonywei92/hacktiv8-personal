const bcryptjs = require('bcryptjs');
module.exports = {
    getHashedPassword(password){
        return bcryptjs.hashSync(password,10);
    },
    validatePassword(password, hashedPassword){
        return bcryptjs.compareSync(password, hashedPassword);
    }
}
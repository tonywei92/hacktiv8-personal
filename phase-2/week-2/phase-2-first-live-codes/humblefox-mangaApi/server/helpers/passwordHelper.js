const bcryptjs = require('bcryptjs')
const salt = bcryptjs.genSaltSync(10)

module.exports = {
    hashPassword(password) {
        return bcryptjs.hashSync(password, salt)
    },
    comparePassword(password, hash) {
        return bcryptjs.compareSync(String(password), hash)
    }
}
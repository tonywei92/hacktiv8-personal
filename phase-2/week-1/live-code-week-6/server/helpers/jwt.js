const jwt=require('jsonwebtoken')

function sign (obj,pass){
    return jwt.sign(obj,pass)
}
function verify (token,pass){
    return jwt.verify(token,pass)
}

module.exports = { sign, verify }
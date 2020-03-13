const jwt = require('jsonwebtoken');

module.exports = {
    createToken(objectData){
       return jwt.sign(objectData, process.env.JWT_TOKEN_SECRET, {expiresIn: '5h'})
    },
    decodeToken(token){
        if(!token){
            throw new Error('Token is undefined')
        }         
        let decoded =  jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        return decoded;
    }
}
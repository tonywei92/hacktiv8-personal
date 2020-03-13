const JWT = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization: tokenRaw } = req.headers;
    if (!tokenRaw) return next({ status: 401, message: "Unauthorized" });
    const token = tokenRaw.split(' ').length > 1 ? tokenRaw.split(' ')[1] : null;
    if(!token) return next({ status: 401, message: "Unauthorized" });
    try{
        const user = JWT.verify(token,process.env.JWT_TOKEN);
        req.user = user;
        next();
    }
    catch(err){
        next(err);
    }
}
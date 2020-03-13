const { Password } = require('../models');

const hasPasswordAccess = (req, res, next) => {
    const { _id: userId } = req.user;
    const { id: passwordId } = req.params;

    Password.findById(passwordId)
        .then(password => { 
             if(!password) throw {status: 404, resource: "Password"}
             if(password.owner.equals(userId)) next();
             else throw {status: 403, resource: "Password"}
        })
        .catch(next);
}

module.exports = { hasPasswordAccess }
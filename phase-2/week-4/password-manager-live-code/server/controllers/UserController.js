const { User } = require('../models');
const bcrypt = require('../lib/bcrypt');
const JWT = require('jsonwebtoken');

class UserController {
    static register(req, res, next) {
        const { full_name, email, password } = req.body;
        User.create({ full_name, email, password: bcrypt.hash(password) })
            .then(user => {
                const {password:pwd, ...rest} = user.toObject();
                res.status(201).json(rest);
            })
            .catch(next);
    }

    static login(req,res,next){
        const {email, password} = req.body;
        User.findOne({email})
            .then(user=> {
                if(!user) throw {status:404, resource: "User"};
                if(bcrypt.verify(password, user.password)) return res.json({token: JWT.sign(user.toObject(), process.env.JWT_TOKEN)});
                throw {status: 403};
            })
            .catch(next)
    }
}

module.exports = UserController;
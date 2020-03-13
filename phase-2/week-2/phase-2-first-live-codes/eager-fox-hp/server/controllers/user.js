const User = require('../models/user');
const tokenHelper = require('../helpers/tokenHandler')
const encryption = require('../helpers/encryption')

class UserController{
    static login(req,res,next){
        User.findOne({email: req.body.email})
        .then(result=>{
            if(!result){
                throw new Error('Email is Invalid!')
            }else{
                let token = tokenHelper.createToken({
                    _id: result._id,
                    email: result.email
                })
                if(encryption.validatePassword(req.body.password,result.password)){
                    res.status(200).json({
                        token
                    })
                }else{
                    throw new Error('Password is Invalid!')
                }
            }
        })
        .catch(err=>{
            next(err);
        })
    }
    static register(req,res,next){

        let body = {
            email: req.body.email,
            password: req.body.password,
        }

        User.create(body)
        .then(result=>{
            res.status(201).json({_id:result._id, email:result.email, password:result.password})
        })
        .catch(err=>{
            next(err)
        })
    }
}
module.exports = UserController;
const tokenHandler = require('../helpers/tokenHandler');
const User = require('../models/user');
const Player = require("../models/player")

module.exports = {
    authentication : function(req,res,next){
        try{
            let user = tokenHandler.decodeToken(req.headers.authorization)
            User.findOne({_id:user._id})
            .then(result=>{
                if(result){
                    req.user = result;                
                    next()
                }else{
                    throw new Error('User not found')
                }
            })
        }catch(err){
            next(err)
        }
       
    },
    authorization : function(req, res, next){

        Player.findOne({_id:req.params.playerId})
        .then(result=>{
            if(result){
                result.userId.toString() == req.user._id.toString() ? next():next(new Error("Not Authorized"))
            }else{
                throw new Error("Player id not found")
            }
        })
        .catch(err=>{
            next(err)
        })
    }

}
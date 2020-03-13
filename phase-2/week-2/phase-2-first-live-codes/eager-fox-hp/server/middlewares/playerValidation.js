const Player = require("../models/player")

let maxPlayer = {
    goalkeeper: 1,
    chaser : 3,
    beater : 2,
    seeker : 1
}

function playerValidation(req, res, next){
    let {position} = req.body
    console.log(position)
    Player.find({userId:req.user._id})
    .then(results=>{
        if(results.length === 7){
            next(new Error("Maximum player is 7"))
        }else if(results.filter(obj=> obj.position === position).length === maxPlayer[position]){
            next(new Error(`Maximum ${position} is ${maxPlayer[position]}`))
        }else{
            next()
        }
    })
    .catch(err=>{
        next(err)
    })
}

module.exports = playerValidation
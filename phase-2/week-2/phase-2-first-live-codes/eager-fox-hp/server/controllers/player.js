const Player = require("../models/player")

class PlayerController {
    static create(req, res, next){
        let player = {
            name: req.body.name,
            house: req.body.house,
            position: req.body.position,
            userId : req.user._id
        }
        Player.create(player)
        .then(result=>{
            res.status(201).json(result)
        })
        .catch(err=>{
            next(err)
        })
    }

    static remove(req, res, next){
        Player.findByIdAndDelete(req.params.playerId)
        .then(result=>{
            console.log(result)
            res.status(200).json({
                _id: result._id
            })
        })
        .catch(err=>{
            next(err)
        })
    }

    static read(req,res, next){
        Player.find({userId: req.user._id})
        .then(results=>{
            res.status(200).json(results)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = PlayerController
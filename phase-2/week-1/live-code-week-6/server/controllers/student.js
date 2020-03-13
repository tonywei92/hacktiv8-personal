const {Player, Student, User } = require("../models")
const {sign} = require('../helpers/jwt')
const bcrypt = require('bcrypt')

class StudentController {
  static find(req, res, next){
    Student.findAll()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }

  static register (req,res,next){
    const {email, password} = req.body
    User.create({email,password})
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static login(req,res,next){
    const{email, password}= req.body
    User.findOne({where:{email}})
    .then(data=>{
      const {email, id }= data
      let test = bcrypt.compareSync(password, data.password)
      if(test){
        let access_token = sign({email,id }, process.env.JWT_SECRET)
        res.status(200).json({access_token})
      } else {
        throw {
          status: 401,
          msg:'Invalid Token'
        }
      }
    })
    .catch(err=>{
      throw {
        status:400,
        msg:'username/password wrong'
      }
    })
  }

  static getAll(req,res,next){
    let email = req.user.email
    User.findAll({where:{email}, include: Player})
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      console.log(err)
      next(err)
    })
  }

  static addPLayer(req,res,next){
    // let email = req.user.email
    let id = req.user.id 
    console.log(req.user,'========================')
    const {name, position} = req.body
    Player.create({name, position, UserId:id})
    .then(data=>{
      console.log(data)
      res.status(201).json(data)
    })
    .catch(err=>{
      console.log(err)
      next(err)
    })
  }

  static delete(req,res,next){
    let id = Number(req.params.id)
    Player.destroy({where:{id}})
    .then(data=>{
      res.status(200).json({msg:'successfully delete player from your team'})
    })
    .catch(err=>{
next(err)
    })
  }

}

module.exports = StudentController
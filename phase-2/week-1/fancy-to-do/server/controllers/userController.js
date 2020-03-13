const { user } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('../helpers/jwt')
module.exports = class {
  static register(req, res, next) {
    let { name, email, password } = req.body
    user
      .create({
        name,
        email,
        password
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }
  static login(req, res, next) {
    let { email, password } = req.body
    user
      .findOne({
        where: {
          email
        }
      })
      .then(user => {
        if (!user) {
          res.json({
            message: 'user not found'
          })
        } else {
          bcrypt.compare(password, user.password, (err, data) => {
            if (err) {
              res.json(err)
            } else {
              if (!data) {
                res.json({
                  message: 'data di bcryptnya kosong'
                })
              } else {
                const token = jwt.generateToken(
                  {
                    email: user.email,
                    id: user.id
                  },
                  process.env.JWT_SECRET
                )
                res.status(200).json({ token })
              }
            }
          })
        }
      })
      .catch(err => {
        res.json(err)
      })
  }

  static findOne(req, res, next) {
    let { email } = req.query
    user
      .findOne({
        where: {
          email
        }
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }
}

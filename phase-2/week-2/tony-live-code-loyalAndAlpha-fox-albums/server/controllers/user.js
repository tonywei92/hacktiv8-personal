const User = require('../models/user');
const regis = require('../helpers/register');
const jwt = require('../helpers/token');

class UserController {
  static register(req, res) {
    console.log(req.body);
    User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    })
  }

  static login(req, res) {
    User
     .findOne({
       email: req.body.email
     })
     .then(user => {
       if (user) {
         if (regis.checkPassword(req.body.password, user.password)) {
           let signUser = {
              id: user._id,
              email: user.email
           };

           let token = jwt.sign(signUser);

           res.status(200).json({
             token: token
           });

         } else {
           res.status(400).json({ err: "password wrong" });
         }
       } else {
         res.status(500).json({ err: "User not found" });
       }
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     })
  }
}

module.exports = UserController

const createError = require('http-errors');
const { User } = require('../models');
const { signToken } = require('../helpers/jwt');

class UserController {
  static login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({
      where: {
        email
      }
    })
      .then((result) => {
        if (result) {
          const isPassword = password === result.password;
          if (isPassword) {

            
            const token = signToken({ email: result.email });
            const payload = {
              access_token: token
            }
            res.status(200);
            res.json(payload);
          }
          else {
            next(createError(400));
          }
        }
        else {
          next(createError(400));
        }
      })
      .catch((err) => {
        console.log(err)
        next(createError(400));
      });
  }
  static register(req, res, next) {
    const { name, email, password } = req.body;
    User.create({
      name,
      email,
      password
    })
      .then((result) => {
        const token = signToken({ email: result.email });
        const payload = {
          access_token: token
        }
        res.status(201);
        res.json(payload);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
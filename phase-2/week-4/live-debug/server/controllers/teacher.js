const { Teacher } = require('../models');
const { generateToken } = require('../helpers/jwt');
const { comparePassword } = require('../helpers/bcrypt');

class TeacherController {
  // register
  static register(req, res, next) {
    const { email, password } = req.body;
    Teacher.create({
      email,
      password
    })
      .then(response => {
        const payload = {
          id: response.id,
          email: response.email
        };
        const access_token = generateToken(payload);
        res.status(201).json({
          message: 'Successfully Register',
          access_token
        });
      })
      .catch(err => {
        next(err);
      });
  }
  // login
  static login(req, res, next) {
    const { email, password } = req.body;
    Teacher.findOne({
      where: {
        email: email || ''
      }
    })
      .then(response => {
        if (response) {
          if (comparePassword(password || '', response.password)) {
            const payload = {
              id: response.id,
              email: response.email
            };
            const access_token = generateToken(payload);
            res.status(200).json({
              message: 'Successfully Login',
              access_token
            });
          } else {
            next({
              status: 400,
              message: 'Invalid email or password'
            });
          }
        } else {
          next({
            status: 400,
            message: 'Invalid email or password'
          });
        }
      })
      .catch(err => next(err));
  }
}
module.exports = TeacherController;

const { User } = require('../models');
const { hash, verify } = require('../lib/bcrypt');
const { jwt } = require('jsonwebtoken');
const createError = require('http-errors');

class UserController {
  static index(req, res, next) {
    User.find({})
      .then(users => res.json(users))
      .catch(next);
  }

  static create(req, res, next) {
    const { full_name: fullName, email, password } = req.body;
    User.create({
      full_name: fullName, email, password: hash(password), created_at: new Date(), updated_at: new Date(), role: 'user'
    })
      .then(user => {
        const { password: pwd, ...rest } = user.toObject();
        res.status(201).json(rest);
      })
      .catch(next);
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => {
        if (!user) throw createError(404, 'User/password not found');

        if (verify(user.password, password)) {
          res.json({ token: jwt.sign(user.toObject(), process.env.JWT_SECRET) });
        } else throw createError(401, 'Unathorized');
      })
      .catch(next);
  }

  static destroy(req, res, next) {
    const { _id: userId, role } = req.user;
    const { id } = req.params;
    const userPromise = {};
    if (role === 'admin') {
      const { id: userIdFromParam } = req.params;
      User.deleteOne({ _id: userIdFromParam });
    } else {
      User.deleteOne({ _id: userId });
    }
    userPromise
      .then(() => res.json({ message: `User with id ${id} deleted successfully` }))
      .catch(next);
  }

  static update(req, res, next) {
    const { _id: userId, role } = req.user;
    const { full_name: fullName, email, password } = req.body;
    const userPromise = {};
    if (role === 'admin') {
      const { id: userIdFromParam } = req.params;
      userPromise = User.findById(userIdFromParam);
    } else {
      userPromise = User.findById(userId);
    }
    userPromise
      .then(user => {
        if (!user) throw createError(404, `User with id ${userId} not found`);
        else {
          return User.update({
            full_name: fullName, email, password: hash(password), updated_at: new Date()
          });
        }
      })
      .then(user => res.json(user))
      .catch(next);
  }
}

module.exports = UserController;

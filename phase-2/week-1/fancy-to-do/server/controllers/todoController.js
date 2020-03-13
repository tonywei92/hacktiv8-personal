const { todo } = require('../models/index')
module.exports = class {
  static create(req, res, next) {
    let { title, due_date, description } = req.body
    let userId = req.user.id
    todo
      .create({
        title,
        due_date,
        description,
        userId
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
  }

  static findAll(req, res, next) {
    todo
      .findAll({
        where: {
          userId: req.user.id
        },
        include: 'user'
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
  }

  static findOne(req, res, next) {
    todo
      .findOne({
        where: {
          id: req.params.todoId
        }
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
  }

  static updateStatus(req, res, next) {
    let { status } = req.body
    todo
      .update(
        { status },
        {
          where: {
            id: req.params.todoId
          },
          returning: true,
          plain: true
        }
      )
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static delete(req, res, next) {
    let { todoId } = req.params
    todo
      .destroy({
        where: {
          id: todoId
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

const { Factory, Robot } = require('../models')
const getStatus = require('../helpers/getStatus')
const getQuery = require('../helpers/getQuery')
const rupiahFormat = require ('../helpers/rupiahFormat')
class FactoryController {
  static getAllFactories(req, res) {
    let option = {}
    if ( req.query.searchBy && req.query.orderBy) {
      option = {
        order: [
          [req.query.searchBy, req.query.orderBy]
        ]
      }
    }
    Factory.findAll(option)
           .then((factories) => {
            res.locals.getStatus = getStatus
            res.locals.getQuery = getQuery
            res.locals.rupiahFormat = rupiahFormat
            res.render('pages/factories/list.ejs', {
              data: factories,
              query: req.query.searchBy ? `searchBy=${req.query.searchBy}&orderBy=${req.query.orderBy}` : null
            })
           })
           .catch((err) => {
             res.send(err)
           })
  }
  static editFactoriesPage (req, res) {
    Factory.findById(req.params.id)
           .then((factory) => {
              res.render('pages/factories/form.ejs', {
                factory,
                url: '/factories/edit/' + factory.id
              })
           })
           .catch((err) => {
             res.send(err)
           })
  }

  static editFactories (req, res) {
    const { name, income, profit } = req.body
    Factory.findById(req.params.id)
           .then((factory) => {
            factory.name = name || factory.name
            factory.income = income || factory.income
            factory.profit = profit || factory.profit
            return factory.save()
           })
           .then(() => {
             res.redirect('/factories')
           })
           .catch((err) => {
             res.send(err)
           })
  }

  static deleteFactory (req, res) {
    Factory.destroy({
      where: {
        id: req.params.id
      }
    })
           .then(() => {
             res.redirect('/factories')
           })
           .catch((err) => {
             res.send(err)
           })
  }

  static postNewFactory (req, res) {
    Factory.create({
      name: req.body.name,
      income: 0,
      outcome: 0,
      profit: 0
    })
      .then((response) => {
        res.redirect('/factories')
      })
      .catch((err) => {
        res.send(err)
      })
  }

  static addNewFactory (req, res) {
    res.render('pages/factories/form.ejs', {
      factory: {
        name: '',
      },
      url : '/factories/new'
    })
  }
  static getDetailFactory (req, res) {
    let factory = {}
    Factory.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((response) => {
      factory = response
      return Robot.findAll({
        where: {
          FactoryId: req.params.id
        },
        order: [
          ['name', 'ASC']
        ]
      })
    })
    .then((responses) => {
      res.locals.rupiahFormat = rupiahFormat
      let options = {
        data: responses.length === 0 ? [] : responses,
        factory: factory,
        robot: {
          name: '',
          price: 0,
          stock: 0
        },
        url: '/robots/register/' + req.params.id,
        errors: req.query.errors ? JSON.parse(req.query.errors) : null
      }
      res.render('pages/factories/detail.ejs', options)
    })
    .catch((err) => {
      res.send(err.message)
    })
  }
}

module.exports = FactoryController
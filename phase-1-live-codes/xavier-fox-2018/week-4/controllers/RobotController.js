const { Robot, Factory } = require('../models')

class RobotController {

  static registerNewRobotPages(req, res) {
    res.render('pages/robots/form.ejs', {
      robot: {
        name: '',
        price: 0,
        stock: 0
      },
      url: '/robots/register/' + req.params.id
    })
  }

  static postNewRobot (req, res) {
    Robot.create({
      name: req.body.name,
      stock: Number(req.body.stock),
      price: Number(req.body.price),
      FactoryId: Number(req.params.id)
    })
          .then(() => {
            res.redirect('/factories/detail/' + req.params.id)
          })
          .catch((err) => {
            res.redirect('/factories/detail/' + req.params.id + '?errors=' + JSON.stringify(err.errors))
          })
  }

  static buyRobots (req, res) {
    let idFactory = ''
    Robot.findById(req.params.id)
      .then(robot => {
        idFactory = robot.FactoryId
        robot.stock -= Number(req.body.stock)
        return robot.update({
          stock: robot.stock
        },{
          sell: req.body.stock
        })
      .then(() => {
        res.redirect('/factories')
      })
      .catch((err) => {
        res.redirect('/factories/detail/' + idFactory + '?errors=' + JSON.stringify(err.errors))
      })
    })
  }

  static updateRobots (req, res) {
    let id = ''
    Robot.findById(req.params.id)
         .then(robot => {
            robot.stock += Number(req.body.stock)
            id = robot.FactoryId
            return robot.save()
         })
         .then(() => {
           res.redirect('/factories/detail/' + id)
         })
         .catch((err) => {
            res.redirect('/factories/detail/' + id + '?errors=' + JSON.stringify(err.errors))
         })
  }
}

module.exports = RobotController
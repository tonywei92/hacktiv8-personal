const jwt = require('../helpers/jwt')
const { user, todo, project, userproject } = require('../models/index')
module.exports = {
  authentication: function(req, res, next) {
    try {
      // console.log('disini masuk loh', req.headers.token)
      const userLogin = jwt.verifyToken(req.headers.token)
      // console.log('ini user', user)

      user
        .findOne({
          where: {
            id: userLogin.id
          }
        })
        .then(result => {
          console.log('ini di then')
          if (result) {
            req.user = result
            // console.log('this is in authentication', req.body.user)
            next()
          } else {
            // console.log('masuk sini')
            res.json({
              message: 'dr authentication || gadapet resultnya kosong'
            })
          }
        })
        .catch(err => {
          // console.log('dia di catch 1')
          res.json(err)
        })
    } catch (error) {
      // console.log('ada di catch 2', error)
      res.json(error)
    }
  },
  todosOwner: function(req, res, next) {
    todo
      .findOne({
        where: {
          id: req.params.todoId
        }
      })
      .then(result => {
        if (result.userId === req.user.id) {
          next()
        } else {
          res.status(401).json({
            message: 'not authorized'
          })
        }
      })
      .catch(err => {
        res.json(err)
      })
  },
  projectsOwner: function(req, res, next) {
    project
      .findOne({
        where: {
          id: req.params.projectId
        }
      })
      .then(result => {
        if (result.userId === req.user.id) {
          next()
        } else {
          res.status(401).json({
            message: 'not authorized'
          })
        }
      })
      .catch(err => {
        res.json(err)
      })
  },
  projectMember: function(req, res, next) {
    let projectId = req.params.projectId
    let allMember
    userproject
      .findAll({
        where: {
          projectId
        }
      })
      .then(result => {
        allMember = result
          .filter(item => item.projectId === projectId)
          .map(item => item.userId)
        // console.log(allMember)
        // console.log(req.user.id)
        if (allMember.includes(req.user.id)) {
          // console.log('msauk sini')
          next()
        } else {
          res.status(401).json({
            message: 'not authorized'
          })
        }
      })
      .catch(err => {
        console.log('error disini')
        res.json(err)
      })
  }
}

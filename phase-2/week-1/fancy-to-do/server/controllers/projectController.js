const { project, userproject, user, projecttodo } = require('../models/index')
module.exports = class {
  static create(req, res, next) {
    let { name } = req.body
    let userId = req.user.id
    let newProject = null

    project
      .create({
        name,
        userId
      })
      .then(result => {
        newProject = result
        return userproject.create({
          projectId: newProject.id,
          userId: newProject.userId
        })
      })
      .then(result => {
        res.status(201).json(newProject)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static getUserProject(req, res, next) {
    let userId = req.user.id
    userproject
      .findAll({
        where: {
          userId
        },
        include: ['user', 'project']
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static inviteMember(req, res, next) {
    let { email } = req.body
    let { projectId } = req.params
    let user2invite = null
    user
      .findOne({
        where: {
          email: email
        }
      })
      .then(result => {
        user2invite = result
        return userproject.create({
          projectId: projectId,
          userId: user2invite.id
        })
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static addTodo(req, res, next) {
    let { title, due_date, description } = req.body
    let projectId = req.params.projectId
    projecttodo
      .create({
        title,
        due_date,
        description,
        projectId
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static getAllMember(req, res, next) {
    let projectId = req.params.projectId
    userproject
      .findAll({
        where: {
          projectId
        }
      })
      .then(result => {
        // res.status(200).json(result)
        let newValue = result
          .filter(item => item.projectId === projectId)
          .map(item => item.userId)
        res.status(200).json(newValue)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static getTodo(req, res, next) {
    let projectId = req.params.projectId
    projecttodo
      .findAll({
        where: {
          projectId
        }
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }
}

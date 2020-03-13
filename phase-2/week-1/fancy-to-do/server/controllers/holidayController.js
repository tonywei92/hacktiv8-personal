const { holiday } = require('../models/index')
const axios = require('axios')
module.exports = class {
  static create(req, res, next) {
    let { title, description, due_date } = req.body
    let userId = req.user.id
    holiday
      .create({
        title,
        description,
        due_date,
        userId
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static findAll(req, res, next) {
    holiday
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
        res.status(400).json(err)
      })
  }

  static holodaydate(req, res, next) {
    axios({
      method: 'get',
      url:
        'https://calendarific.com/api/v2/holidays?api_key=620d5da8daeb4197eb24781fd3c04543099a4124&country=ID&year=2020'
    })
      .then(({ data }) => {
        res.status(200).json(data.response.holidays)
      })
      .catch(err => {
        res.json(err)
      })
  }
}

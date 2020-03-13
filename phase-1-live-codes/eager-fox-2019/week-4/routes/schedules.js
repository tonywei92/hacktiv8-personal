const route = require('express').Router()
const { Restaurant, Schedule } = require('../models')


route.get('/', (req, res) => {
  Schedule.findAll({
    where: req.query.show === 'free' ? { free: true } : {},
    order: [['date']],
    include: Restaurant
  })
    .then(schedules => {
      res.render('index', { _page: 'schedules', schedules })
    })
})

route.post('/add/:id', (req, res) => {
  Schedule.create({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    RestaurantId: Number(req.params.id),
    free: req.body.free === 'on',
    maxParticipants: req.body.quota ? Number(req.body.quota) : null
  })
    .then(schedule => {
      res.redirect('/')
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        req.flash('errors', err.errors)
        res.redirect(`/restaurants/${req.params.id}`)
      } else {
        res.send(err)
      }
    })
})

route.get('/:id', (req, res) => {
  let restos = Restaurant.findAll()
  let schedule = Schedule.findByPk(Number(req.params.id), {
    include: Restaurant
  })

  Promise.all([schedule, restos])
    .then(([schedule, restos]) => {
      res.render('index', { _page: 'schedule', schedule, restos, flash: req.flash() })
    })
    .catch(err => { res.send(err) })
})


route.post('/edit/:id', (req, res) => {
  Schedule.findByPk(req.params.id)
    .then(schedule => {
      if (schedule) {
        schedule.title = req.body.title || schedule.title,
          schedule.description = req.body.description || schedule.description,
          schedule.date = req.body.date || schedule.date,
          schedule.RestaurantId = Number(req.body.venue) || schedule.RestaurantId,
          schedule.free = req.body.free === 'on'
        schedule.maxParticipants = Number(req.body.quota)
        return schedule.save()
      }
    })
    .then(schedule => {
      res.redirect(`/schedules/${req.params.id}`)
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        req.flash('errors', err.errors)
        res.redirect(`/schedules/${req.params.id}`)
      } else {
        res.send(err)
      }
    })
})

route.get('/attend/:id', (req, res) => {
  Schedule.findByPk(req.params.id)
    .then(schedule => {
      if (schedule) {
        schedule.participants++
        return schedule.save()
      }
    })
    .then(schedule => {
      res.redirect(`/schedules/${req.params.id}`)
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        req.flash('errors', err.errors)
        res.redirect(`/schedules/${req.params.id}`)
      } else {
        res.send(err)
      }
    })
})

route.get('/delete/:id', (req, res) => {
  Schedule.findByPk(req.params.id)
    .then(schedule => {
      if (schedule) {
        return schedule.destroy()
      }
    })
    .then(schedule => {
      res.redirect(`/schedules`)
    })
    .catch(err => {
      if (err.validatorKey === "cantDelete") {
        req.flash('errors', [err])
        res.redirect(`/schedules/${req.params.id}`)
      } else {
        res.send(err)
      }
    })
})


module.exports = route
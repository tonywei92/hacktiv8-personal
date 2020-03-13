const express = require('express')
const {Gasoline, Vehicle} = require('./models/index')
const generateFuel = require('./helpers/generateFuel')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/gasolines', async (req, res) => {
  const gasolines = await Gasoline.findAll({
    order: ['id'],
    include: [Vehicle]
  })

  res.render('gasoline', {gasolines})
})

app.get('/gasolines/:id', async (req, res) => {
  try {
    const gasoline = await Gasoline.findByPk(req.params.id, {include: Vehicle, order: [[Vehicle, 'id']]})

    res.render('gasolineDetail', {gasoline, error: req.query.error, info: req.query.info})
  } catch (err) {
    console.log(err)

    res.send('error')
  }
})

app.post('/vehicles/:gasolineId', async (req, res) => {
  try {
    const vehicle = await Vehicle.create({
      name: req.body.name,
      type: req.body.type,
      fuel: 0,
      maxFuel: req.body.maxFuel,
      GasolineId: req.params.gasolineId
    })

    res.redirect(`/gasolines/${req.params.gasolineId}`)
  } catch (err) {
    console.log(err)
    const errorMessage = err.errors.reduce((carry, item) => {
      carry += `error[]=${item.message}&`
      return carry
    }, '')

    res.redirect(`/gasolines/${req.params.gasolineId}?${errorMessage}`)
  }
})

app.get('/vehicles/:vehicleId/addFuel', async (req, res) => {
  const vehicle = await Vehicle.findByPk(req.params.vehicleId, {include: [Gasoline]})

  res.render('addFuel', {vehicle, error: null, generateFuel, error: req.query.error})
})

app.post('/vehicles/:vehicleId/addFuel', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.vehicleId, {include: [Gasoline]})

    await vehicle.update(
      {
        fuel: vehicle.fuel + Number(req.body.fuel)
      },
      {
        returning: true
      }
    )

    const totalPrice = vehicle.Gasoline.price * Number(req.body.fuel)

    res.redirect(
      `/gasolines/${
        vehicle.GasolineId
      }?info=Successfuly adding fuel to your car you need to pay IDR ${totalPrice.toLocaleString()}`
    )
  } catch (err) {
    console.log(err)
    const errorMessage = err.errors.reduce((carry, item) => {
      carry += `error[]=${item.message}&`
      return carry
    }, '')

    res.redirect(`/vehicles/${req.params.vehicleId}/addFuel?${errorMessage}`)
  }
})

app.get('/vehicles/:vehicleId/delete', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.vehicleId)
    await vehicle.destroy()

    res.redirect(`/gasolines/${vehicle.GasolineId}?info=Successfuly removing a car`)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

app.listen(PORT, () => {
  console.log('App listening on port 3000!')
})

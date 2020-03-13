const express = require('express')
const app = express()
const port = 3000
const GasolineController = require('./controllers/gasolineController')
const VehicleController = require('./controllers/vehicleController')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extends:false}))
app.get('/', (req, res)=>{
    res.send('halo')
})

app.get('/gasolines', GasolineController.showAll)
app.get('/gasolines/:id', GasolineController.showVehicles)
app.post('/vehicles/:id', GasolineController.addVehicles)

app.get(`/vehicles/?vecId/addFuel`, VehicleController.addFuel)
app.post('/vehicles/?vecId/addFuel', VehicleController.saveFuel) //Menampilkan sebuah form untuk mengisi bensin pada Vehicle tersebut
app.get('/vehicles/:vehicleId/delete', VehicleController.delete)











app.listen(port, ()=>{
console.log(`listen to port ${port}`)
})
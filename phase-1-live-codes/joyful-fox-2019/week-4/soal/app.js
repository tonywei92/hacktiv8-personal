const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.locals.timeToHarvest = function (day) {
    return day + " day left"
}
app.set('view engine', 'ejs');
const { Farm, Plant } = require('./models');
app.get('/farms', (req, res) => {
    Farm.findAll()
        .then(farms => {
            res.render('farms', { farms })
        })
        .catch(err => res.send(err))
})

app.get('/farms/:farmId', (req, res) => {
    Farm.findByPk(req.params.farmId,
        {
            include: Plant
        })
        .then(farm => {
            res.render('plants', { farm })
        })
        .catch(err => res.send(err))
})

app.post('/farms/:farmId', (req, res) => {
    const { name, price, timeToHarvest } = req.body;
    Plant.create({
        name,
        price,
        timeToHarvest,
        FarmId: req.params.farmId
    })
        .then(result => {
            res.redirect('/farms/' + req.params.farmId);
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

app.get('/plants/:farmId/:plantId/harvest', (req, res) => {
    Plant.destroy({
        where: {
            id: req.params.plantId
        },
        individualHooks: true
    }).then(result => {
        res.redirect('/farms/' + req.params.farmId);
    })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

app.get('/farms/:farmId/sleep', (req, res) => {
    Farm.nextDay(req.params.farmId)
        .then(result => {
            res.redirect('/farms/' + req.params.farmId)
        })
        .catch(err => res.send(err))
})

app.get('/plants/:farmId/:plantId/plants', (req, res) => {

})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
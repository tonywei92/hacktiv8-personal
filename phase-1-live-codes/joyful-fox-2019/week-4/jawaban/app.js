'use strict';
const express = require('express');

const farmRoute = require('./routes/farm');
const plantRoute = require('./routes/plant');

const timeToHarvest = require('./helpers/timeToHarvest');

const app = express();
const PORT = process.env.PORT || 3000;  

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.locals.timeToHarvest = timeToHarvest;

app.use('/farms', farmRoute)
app.use('/plants', plantRoute)

app.listen(PORT, () => {
    console.log(`Listening to the port: ${PORT}`)
});
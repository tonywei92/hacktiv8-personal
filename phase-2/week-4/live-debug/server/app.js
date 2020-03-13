require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/index');
const errorhandler = require('./middlewares/errorhandler');

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);
app.use(errorhandler);

module.exports = app;

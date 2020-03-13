const express = require('express');
const app = express();
const cors= require('cors');
const errorHandler = require('../server/middlewares/errorHandler');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);
app.use(errorHandler);

module.exports = app;   
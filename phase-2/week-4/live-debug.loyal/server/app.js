const express = require('express');
const mongoose = require('mongoose');

const app = express();
const NODE_ENV = process.env.NODE_ENV || 'development';

const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

mongoose.connect('mongodb://localhost/library_' + NODE_ENV, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.use(errorHandler);

module.exports = app;

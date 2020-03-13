const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbfancytodo', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const Schema = mongoose.Schema;

const User = require('./User')(mongoose, Schema);
const Todo = require('./Todo')(mongoose, Schema);

module.exports = { User, Todo };
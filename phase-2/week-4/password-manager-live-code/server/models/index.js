const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pwmanager', {useNewUrlParser: true, useUnifiedTopology: true});

const User = require('./User')(mongoose, Schema);
const Password = require('./Password')(mongoose, Schema);

module.exports = {User, Password};

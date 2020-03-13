'use strict';

const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/password-manager";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected ...');
})
.catch(err => {
    console.log('MongoDB fail to connect, error:', err);
});

module.exports = mongoose;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/memegen', { useNewUrlParser: true });

module.exports = mongoose;
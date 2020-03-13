const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudbasic', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
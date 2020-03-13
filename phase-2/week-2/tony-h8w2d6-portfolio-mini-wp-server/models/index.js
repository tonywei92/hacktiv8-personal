const mongoose = require('mongoose');
let db = '';

switch (process.env.NODE_ENV) {
  case 'production':
    db = process.env.DB_PROD;
    break;
  case 'test':
    db = process.env.DB_TEST;
    break;
  default:
    db = process.env.DB_DEV;
}

mongoose.connect(`mongodb://localhost/${db}`, { useNewUrlParser: true, useUnifiedTopology: true });

const Article = require('./Article')(mongoose, mongoose.Schema);
const User = require('./User')(mongoose, mongoose.Schema);

module.exports = { Article, User };

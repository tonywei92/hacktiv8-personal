const express = require('express');
const session = require('express-session');
const flash   = require('express-flash');
const app     = express();

const routes = require('./routes');
const port   = 3000;

app.set('view engine', 'ejs');

app.use(session({
  secret: 'SECRET',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use('/', routes);

app.listen(3000, console.log(`Listening on port ${port}`));

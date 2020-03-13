const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, console.log('Listening on port 3000'));

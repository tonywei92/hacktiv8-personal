const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public/'));

app.use('/', routes);

app.listen(port, function () {
  console.log('Listening on port', port);
});

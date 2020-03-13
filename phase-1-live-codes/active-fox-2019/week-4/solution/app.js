const express = require('express');
const app = express();
const router = require('./routes/index');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extends: false}));


app.use('/', router);


app.listen(3000, function() {
  console.log(`app listen on port 3000`);
})

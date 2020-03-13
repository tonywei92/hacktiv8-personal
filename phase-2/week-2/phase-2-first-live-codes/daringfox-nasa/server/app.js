require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/from-nasa-with-love', { useNewUrlParser: true });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

const index = require('./routes');

app.use('/', index);

app.listen(3000, function() {
  console.log('Listen on port 3000');
})

require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const students = require('./db/students.json');
const recipes = require('./db/recipes.json');

const port = process.env.PORT || 3000;

const accessTokenValidator = function (req, res, next) {
  if (req.query.hasOwnProperty('access_token')) {

    try {

      const { access_token } = req.query;
      const { JWT_SECRET_KEY } = process.env;
      jwt.verify(access_token, JWT_SECRET_KEY);

      next();

    } catch(err) {
      res.status(400).json({
        message: 'Invalid token'
      });
    }

  } else {
    res.status(400).json({
      message: 'Please provide your access token'
    });
  }
}

app.get('/', function (req, res) {
  res.status(200).json({
    message: 'It works!'
  });
});

app.get('/generate_access_token', function (req, res) {
  if (req.query.hasOwnProperty('github_username')) {

    const { github_username } = req.query;

    if (students.indexOf(github_username) !== -1) {

      const { JWT_SECRET_KEY } = process.env;
      const accessToken = jwt.sign({ github_username }, JWT_SECRET_KEY);

      res.status(200).json({
        access_token: accessToken
      });

    } else {
      let message = 'You are not registered in this application, make sure ';
          message += 'you\'ve provided the correct GitHub username. Please try again, ';
          message += 'and if the problem persists, contact Dimitri Wahyudiputra';
      res.status(400).json({ message });
    }

  } else {
    res.status(400).json({
      message: 'Please provide your GitHub username!'
    });
  }
});

app.get('/recipes', accessTokenValidator, function (req, res) {
  res.status(200).json(recipes);
});

app.listen(port, function () {
  console.log('Listening on port', port);
});

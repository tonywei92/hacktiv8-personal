const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Movie } = require('../models');

module.exports = {

  index (req, res) {

    let movieQuery = { order: [ [ 'id', 'DESC' ] ] };

    const onQuerySuccess = (movies) => {
      res.render('movies/index', { movies });
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Movie
      .findAll(movieQuery)
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  create (req, res) {

    const onQuerySuccess = () => {
      res.redirect('/movies');
    }

    const onQueryError = (err) => {
      if (err.name === 'SequelizeValidationError') {
        req.flash('validationErrors', err.errors);
        res.redirect('/movies');
      } else {
        res.json(err);
      }
    }

    Movie
      .create(req.body)
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  edit (req, res) {

    const onQuerySuccess = (movie) => {
      res.render('movies/edit', { movie });
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Movie
      .findOne({ where: { id: req.params.id } })
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  update (req, res) {

    const onQuerySuccess = (movie) => {
      res.redirect('/movies');
    }

    const onQueryError = (err) => {
      if (err.name === 'SequelizeValidationError') {
        req.flash('validationErrors', err.errors);
        res.redirect('/movies/' + req.params.id + '/edit');
      } else {
        res.json(err);
      }
    }

    Movie
      .update(
        req.body,
        { where: { id: req.params.id } }
      )
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  destroy (req, res) {

    const onQuerySuccess = (movie) => {
      res.redirect('/movies');
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Movie
      .destroy({ where: { id: req.params.id } })
      .then(onQuerySuccess)
      .catch(onQueryError);

  }

};

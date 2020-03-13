const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Rent, Movie } = require('../models');
const formatDate = require('../helpers/formatDate');

module.exports = {

  index (req, res) {

    // Pagination
    let currentPage = 1;
    const limit = 4;
    let offset = 0;

    if (req.query.hasOwnProperty('page')) {
      currentPage = Number(req.query.page);

      offset = (limit * currentPage) - limit;
    }

    const query = {
      include: [{ model: Movie }],
      order: [ ['createdAt', 'DESC'] ],
      limit,
      offset
    }

    const rentQuery = Rent.findAll(query);
    const rentsCount = Rent.findAll({
      attributes: [[ Sequelize.fn('COUNT', Sequelize.col('id')), 'rentsCount' ]]
    });

    const onQuerySuccess = (data) => {
      const movies = data[0];
      const rents = data[1];
      const rentsLength = Number(data[2][0].dataValues.rentsCount);
      const pageCount = Math.ceil(rentsLength / 4);

      res.render('rents/index', { movies, rents, formatDate, pageCount, currentPage });
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Promise
      .all([
        Movie.findAll({ where: { availableToRent: true }, order: [ ['title', 'ASC'] ] }),
        rentQuery,
        rentsCount
      ])
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  create (req, res) {

    const onQuerySuccess = () => {
      res.redirect('/rents');
    }

    const onQueryError = (err) => {
      if (err.name === 'SequelizeValidationError') {
        req.flash('validationErrors', err.errors);
        res.redirect('/rents');
      } else {
        res.json(err);
      }
    }

    const newRent = {
      movieId: req.body.movieId || '',
      borrowerName: req.body.borrowerName,
      borrowerGender: req.body.borrowerGender || ''
    };

    Rent
      .create(newRent)
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  return (req, res) {

    const onQuerySuccess = () => {
      res.redirect('/rents');
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Rent
      .update({ returned: true }, { where: { id: req.params.id }, individualHooks: true })
      .then(onQuerySuccess)
      .catch(onQueryError);

  }

};

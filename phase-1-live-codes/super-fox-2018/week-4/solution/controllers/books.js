const { Book } = require('../models');

module.exports = {

  index (req, res) {

    const onQuerySuccess = (books) => {
      res.render('books/index', { books });
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Book
      .findAll({ order: [ [ 'createdAt', 'DESC' ] ] })
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  create (req, res) {

    const onQuerySuccess = () => {
      res.redirect('/books');
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Book
      .create(req.body)
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  edit (req, res) {

    const onQuerySuccess = (book) => {
      res.render('books/edit', { book });
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Book
      .findOne({ where: { id: req.params.id } })
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  update (req, res) {

    const onQuerySuccess = (book) => {
      res.redirect('/books');
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Book
      .update(
        req.body,
        { where: { id: req.params.id } }
      )
      .then(onQuerySuccess)
      .catch(onQueryError);

  },

  destroy (req, res) {

    const onQuerySuccess = (book) => {
      res.redirect('/books');
    }

    const onQueryError = (err) => {
      res.json(err);
    }

    Book
      .destroy({ where: { id: req.params.id } })
      .then(onQuerySuccess)
      .catch(onQueryError);

  }

};

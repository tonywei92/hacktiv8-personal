const { Article } = require('../models');
const { slugIt } = require('../lib/string');
const createError = require('http-errors');

class ArticleController {
  static index(req, res, next) {
    Article.find({}, function cb(err, articles) {
      if (err) next(err);
      else res.json(articles);
    });
  }

  static show(req, res, next) {
    const { id } = req.params;
    Article.findById(id, function cb(err, article) {
      if (err) return next(err);
      if (!article) {
        return next(createError(404, `Article with id ${id} not found`));
      }
      return res.json(article);
    });
  }

  static create(req, res, next) {
    const { id: author } = req.user;
    const { title, content, featured_image: featuredImage } = req.body;
    const slug = slugIt(title);
    Article.create({
      title,
      content,
      author,
      featured_image: featuredImage,
      slug,
      created_at: new Date(),
      updated_at: new Date()
    }, function cb(err, article) {
      if (err) next(err);
      else res.status(201).json(article);
    });
  }

  static update(req, res, next) {
    const { title, content, featured_image: featuredImage } = req.body;
    const { id } = req.params;
    const slug = slugIt(title);
    Article.findById(id)
      .then(article => {
        if (!article) {
          throw createError(404, `Article with id ${id} not found`);
        } else {
          return Article.update({ _id: id }, {
            title, content, featured_image: featuredImage, slug, updated_at: new Date()
          });
        }
      })
      .then(result => {
        res.json(result);
      })
      .catch(next);
  }

  static destroy(req, res, next) {
    const { id } = req.params;
    Article.deleteOne({ _id: id }, function cb(err) {
      if (err) next(err);
      else next(createError(404, `Article with id ${id} deleted successfully`));
    });
  }
}

module.exports = ArticleController;

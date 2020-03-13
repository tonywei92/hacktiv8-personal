const { Comic } = require('../models');

class ComicController {
  static showAll(req, res, next) {
    Comic.findAll()
      .then((result) => {
        res.status(200);
        res.json(result);
      }).catch((err) => {
        next(err);
      });
  }

  static updateById(req, res, next) {
    const { id } = req.params;
    const {title, author, imageUrl} = req.body;
    Comic.update({
      title,
      author,
      imageUrl
    }, {
      where: {
        id
      },
      returning: true
    })
      .then((result) => {
        res.status(200);
        res.json(result);
      }).catch((err) => {
        next(err);
      });
  }
}

module.exports = ComicController;
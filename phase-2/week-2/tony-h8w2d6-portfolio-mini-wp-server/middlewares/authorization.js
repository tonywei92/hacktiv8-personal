const { Article } = require('../models');
const createError = require('http-errors');


const adminAuthorization = (req, res, next) =>{
  const { role } = req.user ? req.user : {};
  if (role === 'admin') return next();
  return next(createError(401, 'Unauthenticated'));
};

const articleAuthorization = (req, res, next) =>{
  const { _id: userId } = req.user;
  const { id: articleId } = req.params;
  Article.findById(articleId)
    .then(article => {
      if (article.author !== userId) {
        throw createError(401, 'Unauthenticated');
      }
      next();
    })
    .catch(next);
};


module.exports = { adminAuthorization, articleAuthorization };

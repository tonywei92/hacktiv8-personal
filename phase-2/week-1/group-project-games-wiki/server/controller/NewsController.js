const GoogleNews = require('../models/GoogleNews');

class NewsController {
    static getNews(req, res, next) {
        const { q, translate = "id" } = req.query;
        GoogleNews.getNews(q, translate)
            .then(news => {
                res.json(news);
            })
            .catch(next);
    }
}

module.exports = NewsController;
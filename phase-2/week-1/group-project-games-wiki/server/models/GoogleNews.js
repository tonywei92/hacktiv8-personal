const Request = require('../lib/Request');
const GNewsRequest = new Request('https://news.google.com/rss')
const parseString = require('xml2js').parseString;
const Translate = require('../lib/Translate');

GNewsRequest.setParser(function (text) {
    return new Promise((resolve, reject) => {
        parseString(text, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })
});

class GoogleNews {
    static getNews(keyword, translate) {
        return GNewsRequest.send([], { q: keyword })
            .then(news => {
                if (translate) {
                    const promises = [];
                    for (var i = 0; i < news.length; i++) {
                        promises.push(Translate(news[i].title[0], translate));
                    }
                    return Promise.all(promises)
                        .then(translated => {
                            for (var i = 0; i < news.length; i++) {
                                news[i].title[0] = translated[i];
                            }
                            return news;
                        })
                }
                else {
                    return news;
                }
            })
    }
}

module.exports = GoogleNews;
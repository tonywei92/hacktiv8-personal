const Author = require("../models").Author;
const Book = require("../models").Book;
const Hobby = require("../models").Hobby;
class AuthorController {
    static index(req, res) {
        Author.findAll({
            include: [Book, Hobby]
        }).then(authors => {
            res.send(authors)
        })
            .catch(err => {
                res.send(err)
            })

    }

    static add(req, res) {
        res.render('author/addAuthorForm')
    }

    static create(req, res) {
        Author.create({
            name: req.body.name
        })
            .then(() => {
                res.redirect('/authors')
            })
    }

    static edit() {

    }

    static update() {

    }
}

module.exports = AuthorController;
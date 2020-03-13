const router = require('express').Router();
const Book = require('../models').Book;
router.get('/', (req, res) => {
    const booksData = [];
    Book.findAll()
        .then(books => {
            const promises = []
            for (let i = 0; i < books.length; i++) {
                const book = books[i].dataValues;
                booksData.push(book);
                promises.push(books[i].getAuthor())
            }
            return Promise.all(promises)
        })
        .then(authors => {
            for (let i = 0; i < authors.length; i++) {
                booksData[i].author = authors[i]
            }
            res.send(booksData);
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/add', (req, res) => {
    res.send('tambah buku')
})

module.exports = router;
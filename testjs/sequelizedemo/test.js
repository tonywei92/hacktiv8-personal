const express = require('express');
const app = express();

const Author = require('./models').Author;
const Book = require('./models').Book;


app.get('/', (req, res) => {
    Author.findAll({ include: Book })
        .then(authors => {
            res.send(authors)
        })
})

app.listen(3000, () => console.log('listening'))
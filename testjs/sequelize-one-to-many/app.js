const express = require('express');
const app = express();
const PORT = 5000;
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const studentRouter = require('./routes/studentRouter');

const Author = require('./models').Author;
const Book = require('./models').Book;
const Community = require('./models').Community;
app.get('/', (req, res) => {
    // Community.findAll({ include: Author })
    //     .then(communities => {
    //         res.send(communities)
    //     })
    //     .catch(err => res.send(err.message))
    Author.findAll({ include: Community })
        .then(authors => {
            res.send(authors);
        })
        .catch(err => res.send(err.message))
    // Community.create({
    //     name: "Patra Dance Club"
    // })
    //     .then(() => res.send('complete'))
    //     .catch(err => res.send(err.message))
    // Author.findAll({ include: Book })
    //     .then(authors => {
    //         res.send(authors)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.send(err.message)
    //     })
    //     let booksArr = [];
    //     Book.findAll()
    //         .then(books => {
    //             booksArr = books;
    //             const promises = [];
    //             for (let i = 0; i < books.length; i++) {
    //                 promises.push(books[i].getAuthor())
    //             }
    //             return Promise.all(promises)
    //         })
    //         .then(authors => {
    //             for (let i = 0; i < booksArr.length; i++) {
    //                 booksArr[i].setDataValue('Author', authors[i])
    //             }
    //             res.send(booksArr);
    //         })
    //         .catch(err => res.send(err))
})

app.use('/students', studentRouter);


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
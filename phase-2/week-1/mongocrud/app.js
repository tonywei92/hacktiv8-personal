const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require('./connection');
const BookRouter = require('./routes/BookRoutes');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

connection
    .then((db) => {
        app.use(function (req, res, next) {
            req.db = db;
            next();
        })
        app.use('/api/books', BookRouter)
        app.use(function (err, req, res, next) {
            res.status(err.status ? err.status : 500).json({ err: err.message });
        })
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    })
    .catch(err => console.log(err));


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const TodoRoutes = require('./routes/TodoRoutes');
const AuthRoutes = require('./routes/AuthRoutes');


app.use('/api/todos', TodoRoutes);
app.use('/api', AuthRoutes);

function errorHandler(err, req, res, next) {
    if (err) {
        res.status(err.status ? err.status : 500).json({ message: err.message })
    }
    else {
        next(err)
    }
}

app.use(errorHandler)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
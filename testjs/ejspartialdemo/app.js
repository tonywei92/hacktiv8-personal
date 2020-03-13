const express = require('express');
const app = express();
const PORT = 5000;
const helpers = require('./helpers');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.locals.test123 = helpers.test123

app.get('/students', (req, res) => {
    res.render('students');
})

app.get('/students/add', (req, res) => {
    const data = {}

    if (req.query.error) {
        data.error = req.query.error;
    }

    if (req.query.success) {
        data.success = req.query.success;
    }

    res.render('studentForm', { data: data });
})

app.post('/students/add', (req, res) => {
    const name = req.body.name;
    if (!name || name === "") {
        res.redirect('/students/add?error=name tidak boleh kosong')
    }
    else {
        res.redirect('/students/add?success=data berhasil diinput');
    }
})

app.get('/teachers', (req, res) => {
    res.render('teachers');
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
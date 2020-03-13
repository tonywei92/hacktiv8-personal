const express = require('express');
const app = express();
const PORT = 3000;
const StudentRouter = require('./routes/StudentRouter')
const session = require('express-session')
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.get('/', (req, res) => {
    req.session.user = {
        name: 'patra'
    }
    res.send('ok')
})

app.use('/students', StudentRouter)

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'patra' && password === 'secret') {
        req.session.user = {
            name: username
        }
        res.redirect('/students')
    }
    else {
        res.redirect('/login')
    }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const app = express();
const PORT = 3000;

const itemsRouter = require('./routers/itemsRouter');
const membersRouter = require('./routers/membersRouter');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(flash());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.use('/members', membersRouter);
app.use('/items', itemsRouter);



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('./mongoose');
const BookRoutes = require('./routes/BookRoutes');
const MemberRoutes = require('./routes/MemberRoutes');
const TransactionRoutes = require('./routes/TransactionRoutes');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(function (req, res, next) {
    req.mongoose = mongoose;
    next();
})
app.use('/api/books', BookRoutes)
app.use('/api/members', MemberRoutes)
app.use('/api/transactions', TransactionRoutes)
app.use(function (err, req, res, next) {
    res.status(err.status ? err.status : 500).json({ err: err.message });
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


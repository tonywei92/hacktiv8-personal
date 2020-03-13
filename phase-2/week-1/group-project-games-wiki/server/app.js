const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const NewsRoutes = require('./routes/NewsRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/news', NewsRoutes);

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({ message: err.message });
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
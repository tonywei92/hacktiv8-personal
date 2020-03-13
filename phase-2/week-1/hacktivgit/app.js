const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3000;
const GithubRoute = require('./routes/GithubRoutes');

app.use('/api/github', GithubRoute);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
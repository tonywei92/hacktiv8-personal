const express = require('express');
const app = express();
const UserRoutes = require('./routes/UserRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', UserRoutes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status ? err.status : 500).json({ message: err.message });
});

module.exports = app;

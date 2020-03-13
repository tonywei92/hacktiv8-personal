const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const ErrorHandler = require('./middlewares/ErrorHandler');
const UserRoutes = require('./routes/UserRoutes');
const TodoRoutes = require('./routes/TodoRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/auth', UserRoutes);
app.use('/api/todos', TodoRoutes);

app.use(ErrorHandler);

app.listen(PORT, () => console.log(`Listen to port ${PORT}`));
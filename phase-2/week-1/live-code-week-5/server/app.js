console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
  console.log(`"${process.env.NODE_ENV}"`);
  require('dotenv').config();
}

const express = require('express');
const createError = require('http-errors');
const cors = require('cors');

const app = express();

const indexRouter = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || "3000";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
})
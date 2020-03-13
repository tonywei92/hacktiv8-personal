const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const comicRouter = require('./comics');

router.get("/", (req, res) => {
  res.send("Welcome Home");
});

router.use("/", usersRouter);
router.use("/comics", comicRouter);

module.exports = router;
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
const PORT = 3000;
const authorRouter = require("./routers/authorRouter");
const bookRouter = require("./routers/bookRouter");
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

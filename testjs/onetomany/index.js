const express = require("express");
const app = express();
const PORT = 3000;
const AuthorRoutes = require("./routes/AuthorRoutes");
app.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/authors", AuthorRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

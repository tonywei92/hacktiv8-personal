const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/data", (req, res) => {
  const error = req.query.error;
  const data = {};
  if (error) {
    data.error = error;
  } else {
    data.error = null;
  }

  res.render("form", data);
});

app.post("/data", (req, res) => {
  if (req.body.name === "Audrick") {
    res.redirect("/data");
  } else {
    res.redirect("/data?error=" + "nama kamu bukan audrick helicopter");
  }
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

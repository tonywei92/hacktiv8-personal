const express = require("express");
const app = express();
const session = require("express-session");
app.set("view engine", "ejs");
app.set("trust proxy", 1); // trust first proxy
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

const PORT = 3000;
const studentRouter = require("./routers/studentRouter");
app.get("/", (req, res) => {
  res.send("ini homepage");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  if (req.body.username === "arnold" && req.body.password === "secret") {
    req.session.user = {
      name: "arnold"
    };
    res.redirect("/");
  } else {
    res.redirect("/login?error=username atau password salah");
  }
});

app.use("/students", studentRouter);

app.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
});

app.listen(3000, console.log(`listening on ${PORT}`));

const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const students = [];

app.get("/", (req, res) => {
  res.send("halo nama saya");
});

app.get("/students", (req, res) => {
  res.render("students", { students: students });
});

app.get("/students/add", (req, res) => {
  res.render("studentsAdd");
});

app.get("/students/edit/:id", (req, res) => {
  res.render("studentsEdit", { student });
});

app.get("/students/delete/:id", (req, res) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === Number(req.params.id)) {
      students.splice(i, 1);
      break;
    }
  }
  res.redirect("/students");
});

app.post("/students/add", (req, res) => {
  let id = 1;
  if (students.length > 0) {
    id = students[students.length - 1].id + 1;
  }
  students.push({
    id: id,
    nama: req.body.nama,
    alamat: req.body.alamat,
    umur: req.body.umur
  });
  res.redirect("/students");
});

app.listen(PORT, () => console.log("listening on port " + PORT));

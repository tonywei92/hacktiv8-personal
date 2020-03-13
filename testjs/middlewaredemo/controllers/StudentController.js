class StudentController {
  static index(req, res) {
    res.render("students", { user: req.session.user });
  }
}

module.exports = StudentController;

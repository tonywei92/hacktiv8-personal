const router = require("express").Router();
const StudentController = require("../controllers/StudentController");
const loginMiddleware = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

router.use(loginMiddleware);

router.get("/", StudentController.index);

module.exports = router;

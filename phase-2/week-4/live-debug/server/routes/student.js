const router = require('express').Router();
const StudentController = require('../controllers/student');

router.get("/", (req, res, next) => {
  res.send("Students")
})
router.post('/', StudentController.submit);

module.exports = router;

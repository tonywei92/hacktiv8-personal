const { Student } = require('../models');
class StudentController {
  // submit
  static submit(req, res, next) {
    const { name, score } = req.body;
    const submitScore = Number(score);
    const TeacherId = req.teacher.id;
    console.log(name, submitScore, TeacherId);
    if (!Number.isInteger(submitScore)) {
      next({
        status: 400,
        message: 'Score only accept number'
      });
    }
    else {
      Student.create({
        name: name || '',
        score: submitScore,
        TeacherId: TeacherId
      })
        .then(response => {
          res.status(201).json({
            message: 'Successfully submit score',
            student: response
          });
        })
        .catch(err => {
          next(err)
        });
    }
  }
}

module.exports = StudentController;

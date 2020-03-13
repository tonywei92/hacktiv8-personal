const students = []

class StudentControler {
    static index(req, res) {
        res.render('students', { students: students })
    }

    static add(req, res) {
        res.render('studentAdd');
    }

    static save(req, res) {
        students.push({
            name: req.body.name,
            age: req.body.age
        })
        res.redirect('/students')
    }


}

module.exports = StudentControler;
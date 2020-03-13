const fs = require('fs');

class Employee {
    static all(cb) {
        fs.readFile('./employees.json', function (err, data) {
            if (err) {
                cb(err)
            }
            else {
                cb(null, JSON.parse(data))
            }
        })
    }

    static login(username, password, cb) {
        Employee.all(function (err, employees) {
            if (err) {
                cb(err)
            }
            else {
                // cek sudah ada yang login atau belum
                let hasLoggedIn = false;
                let employee = null;
                let indexEmployee = null
                for (let i = 0; i < employees.length; i++) {
                    if (employees[i].loggedIn) {
                        hasLoggedIn = true;
                    }
                    if (employees[i].name === username) {
                        indexEmployee = i
                    }
                }

                if (hasLoggedIn) {
                    cb('sudah login')
                }
                else {
                    if (indexEmployee) {
                        if (employees[indexEmployee].password === password) {
                            employees[indexEmployee].loggedIn = true;
                            Employee.save(employees, function (err) {
                                if (err) {
                                    cb(err)
                                }
                                else {
                                    cb(null, "berhasil login")
                                }
                            });
                        }
                        else {
                            cb('password salah')
                        }
                    }
                    else {
                        cb('user tidak ditemukan')
                    }
                }
            }
        })
    }

    static save(data, cb) {
        fs.writeFile('./employees.json', JSON.stringify(data, null, 2), function (err) {
            if (err) {
                cb(err)
            }
            else {
                cb()
            }
        })
    }
}

module.exports = Employee;

// ambil dulu semua employees
// cari yang usernamenya sama
// bila tidak ada yang sama
// create employee (dan save)
const fs = require('fs');

class Employee{
    constructor(username, password, posisi, login){
        this.username = username;
        this.password = password;
        this.posisi = posisi;
        this.login = login;
    }
    static findAll(cb){
        fs.readFile('./employees.json', 'utf8', function(err,data){
            if(err){
                cb(err)
            }
            else{
                const rawArr = JSON.parse(data);
                const employees = []
                for(let i = 0; i<rawArr.length;i++){
                    employees.push(new Employee(rawArr[i].username, rawArr[i].password, rawArr[i].posisi, rawArr[i].login))
                }
                cb(null, employees)
            }
        })
    }

    static findOne(param, cb){
        this.findAll(function(err, employees){
            if(err){
                cb(err)
            }
            else{
                let employee = null;
                for(let i = 0; i<employees.length;i++){
                    if(employees[i][param.where] === param.whereValue){
                        employee = employees[i]
                    }
                }
                cb(null, employee)
            }
        })
    }

    static update(param, cb){
        this.findAll(function(err, employees){
            if(err){
                cb(err)
            }
            else{
                for(let i= 0; i<employees.length;i++){
                    if(employees[i][param.where] === param.whereValue){
                        employees[i][param.update] = param.updateValue;
                    }
                }
                Employee.save(employees,function(err){
                    if(err){
                        cb(err)
                    }
                    else{
                        cb(null )
                    }
                })
            }
        });
    }

    static save(data, cb){
        fs.writeFile('./employees.json', JSON.stringify(data, null, 2), function(err){
            if(err){
                cb(err)
            }
            else{
                cb()
            }
        })
    }


    static create(param,cb){
        
        this.findAll(function(err, employees){
            if(err){
                console.log(err)
            }
            else{
                employees.push(new Employee(param.username, param.password, param.posisi, false));
                Employee.save(employees, function(err){
                    if(err){
                        cb(err)
                    }
                    else{
                        cb()
                    }
                })
            }
        })
    }
}

module.exports = Employee;
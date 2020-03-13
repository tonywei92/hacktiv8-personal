const fs = require('fs');
const file = './students.json'

class Student{
    constructor(id, name, kelas){
        this.id = id;
        this.name = name;
        this.kelas = kelas;
    }

    static findAll(objParam, cb){
        fs.readFile(file, 'utf8', function(err, data){
            if(err){
                cb(err)
            }
            else{
                const raw = JSON.parse(data);
                const arrResult = [];
                raw.forEach(item => arrResult.push(new Student(Number(item.id), item.name, item.kelas)))
                if(!objParam.where){
                    cb(null,arrResult)
                }
                else{
                    const arrResultFiltered = [];
                    for(let i = 0; i< arrResult.length;i++){
                        if(arrResult[i][objParam.where] === objParam.whereValue){
                            arrResultFiltered.push(arrResult[i])
                        }
                    }
                    cb(null, arrResultFiltered)
                }
            }
        });
    }

    static findOne(objParam, cb){
        this.findAll(objParam, function(err, students){
            if(err){
                cb(err)
            }
            else{
                if(students.length === 0){
                    cb(null, {})
                }
                else{
                    cb(null, students[0]);
                }
            }
        })
    }

    static update(objParam, cb){
        const self = this;
        this.findAll({}, function(err, students){
            if(err){
                cb(err)
            }
            else{
                let count = 0;
                if(objParam.updateOne){
                    if(students.length === 0){
                        cb(null)
                    }
                    else {
                        for(let i = 0; i<students.length;i++){
                            if(students[i][objParam.where] ===  objParam.whereValue){
                                students[i][objParam.update] = objParam.updateValue;
                                this.save(students, cb)
                                count++;
                                break;
                            }
                        }
                        
                    }
                }
                students.forEach(student => {
                    if(student[objParam.where] ===  objParam.whereValue){
                        student[objParam.update] = objParam.updateValue;
                        count++
                    }
                })
                self.save(students, {jumlah: count}, cb)
            }
        })
    }

    static create(studentObj, cb){
        this.findAll({}, function(err, students){
            if(err){
                cb(err);
            }
            else{
                let newId = 1
                if(students.length > 0){
                    newId = students[students.length-1].id+1
                }
                students.push(new Student(newId, studentObj.name, studentObj.kelas))
                Student.save(students, {newId}, cb )
            }
        })
    }

    static save(data, objAdditional, cb){
        fs.writeFile(file,JSON.stringify(data, null, 2), function(err){
            cb(err, objAdditional)
        })
    }
}

module.exports = Student;
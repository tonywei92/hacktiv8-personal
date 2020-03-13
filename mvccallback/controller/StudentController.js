const Student = require('../model/Student');

class StudentController{
    static updateName(id, name){
        Student.findOne({
            where: "id",
            whereValue: id
        }, function(err, student){
            if(student){
                Student.update({
                    where: 'id',
                    whereValue: id,
                    update: 'name',
                    updateValue: name
                }, function(err, objAdditional){
                    if(err){
                        console.log(err.message);
                    }
                    else{
                        console.log(`${objAdditional.jumlah} record updated`)
                    }
                })
            }
            else{
                console.log(`student dengan id ${id} tidak ditemukan`)
            }
        })
       
    }

    static create(name, kelas){
        Student.create({
            name: name,
            kelas: kelas
        }, function(err, objAdditional){
            if(err){
                console.log(err.message)
            }
            else{
                console.log(`berhasil, id baru adalah ${objAdditional.newId}`)
            }
        })
    }
}

StudentController.create("uzai", 3)
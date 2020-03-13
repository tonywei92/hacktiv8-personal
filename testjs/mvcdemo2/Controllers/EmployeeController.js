const Employee = require('../Models/Employee');

class EmployeeController{
    static login(name, password){
        Employee.findOne({
            where:"login",
            value: true
        }, function(err, employee){
            if(err){
                console.log(err)
            }
            else{
                if(employee){
                    console.log('anda harus logout terlebih dahulu')
                }
                else{
                    Employee.findOne({
                        where: "username",
                        whereValue: name
                    }, function(err, employee){
                        if(err){
                            console.log(err)
                        }
                        else{
                            if(employee){
                                if(employee.password ===  password){
                                    Employee.update({
                                        where: "username",
                                        whereValue: name,
                                        update: "login",
                                        updateValue: true
                                    }, function(err){
                                        if(err){
                                            console.log(err)
                                        }
                                        else{
                                            console.log(`login berhasil`)
                                        }
                                    })
                                }
                                else{
                                    console.log('password salah')
                                }
                            }
                            else{
                                console.log('employee tidak ditemukan')
                            }
                        }
                    })
                }
            }
        })
        
    }

    static ubahJabatan(dari, ke){
        Employee.update({
            where: "posisi",
            whereValue: dari,
            update: "posisi",
            updateValue: ke
        }, function(err){
            if(err){
                console.log(err)
            }
            else{
                console.log(`update berhasil`)
            }
        })
    }

    static register(username, password, posisi){
        Employee.findOne({
            where: "username",
            whereValue: username
        }, function(err, employee){
            if(employee){
                console.log('username sudah ada')
            }
            else{
                Employee.create({username, password, posisi}, function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log('berhasil register')
                    }
                })
            }
        })
        
    }
}

module.exports = EmployeeController;
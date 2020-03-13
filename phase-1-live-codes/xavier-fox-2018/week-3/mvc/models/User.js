const db = require("./connection.js")

class User {

    static findAll(callback){

        db.all("SELECT * FROM users ",function(err,data){
            if(err){
                throw (err,null)
            }else{
                callback(null,data)
            }
            db.close()
        })
    }

    static checkusername(username,callback){
        db.all(`SELECT username from users where username = '${username}' `,function(err,data){
            if(err){
                throw (err,null)
            }else{
                callback(null,data)
            }
            db.close()
        })
    }

    static register(name,username,password,callback){
        // check username
        this.checkusername(username,function(err,data){
            if(err){
                throw callback(err,null)
            }else{
                if(data.length === 0){

                    db.run(`INSERT INTO users (name, username, password) 
                    VALUES ('${name}', '${username}', '${password}') `,function(err){
                        if(err){
                            throw callback(err,null)
                        }else{
                            callback(null,{status:"success","message":"You successfully Register" })
                        }

                    })
                }else{

                    callback(null,{status:"error",message:"username has already been registered"})

                }
            }

        })
       
    }

}

module.exports = User
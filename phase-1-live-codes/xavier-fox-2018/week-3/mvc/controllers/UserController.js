const User = require("../models/User.js")
const View = require("../views/index.js")

class UserController{
    static findAll(){
        User.findAll(function(err,data){
            if(err){
                View.displayError(err)
            }else{
                View.displayData(data,"User")
            }
        })

    }

    static register(name,username,password){
      
        if(name !== undefined && password !== undefined){
            User.register(name,username,password,function(err,data){
                if(err){
                    View.displayError(err)
                }else{

                    if(data.status === "success"){
                        View.displayData(name,"Success")
                    }else{
                        View.displayError(data.message)
                    }

                    
                }

            })

        }else{
            let err = ""
            if(name === undefined){
                err += `Name must be filled \n`
            }
            if(password === undefined){
                err += `Password must be filled \n`
            }

            View.displayError(err)
        }

    }
}

module.exports = UserController
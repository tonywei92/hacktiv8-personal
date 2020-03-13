function errorHandler(err,req,res,next){
    if(err.status === 404){

    } else if(err.name === 'SequelizeValiationError'){
        
    }
}
var nodeError = ['Error','EvalError','InternalError','RangeError','ReferenceError','SyntaxError','TypeError','URIError']
var mongooseError = ['MongooseError','DisconnectedError','DivergentArrayError','MissingSchemaError','DocumentNotFoundError','MissingSchemaError','ObjectExpectedError','ObjectParameterError','OverwriteModelError','ParallelSaveError','StrictModeError','VersionError']
var mongooseErrorFromClient = ['CastError','ValidatorError','ValidationError'];
var jwtError = ['TokenExpiredError','JsonWebTokenError','NotBeforeError']

function nodeErrorMessage(message){
    switch(message){
        case "Not Authorized":
            return 403;
        case 'User not found':
            return 401;
        case "Maximum player is 7":
        case "Maximum goalkeeper is 1":
        case "Maximum chaser is 3":
        case "Maximum beater is 2":
        case "Maximum seeker is 1":
        case "Player id not found":
        case 'Token is undefined':
        case 'Email is Invalid!':
        case 'Password is Invalid!':
            return 400;
        default :{
            return 500;
        }
    }
}

module.exports = function(errorObject){

    let statusCode = 500;  
    let returnObj = {
        error : errorObject
    }
    if(jwtError.includes(errorObject.name)){
        statusCode = 401;
        returnObj.message = 'Token is Invalid'
        returnObj.source = 'jwt'
    }
    else if(nodeError.includes(errorObject.name)){
        returnObj.error = JSON.parse(JSON.stringify(errorObject, ['message', 'arguments', 'type', 'name']))
        returnObj.source = 'node';
        statusCode = nodeErrorMessage(errorObject.message);
        returnObj.message = errorObject.message;
    }else if(mongooseError.includes(errorObject.name)){
        returnObj.source = 'database'
        returnObj.message = 'Error from server'
    }else if(mongooseErrorFromClient.includes(errorObject.name)){
        errorObject.message ? returnObj.message = errorObject.message : returnObj.message = 'Bad Request'
        statusCode = 400;
    }else{
        returnObj.source = 'unknown error';
        returnObj.message = 'Something error';
    }
    returnObj.statusCode = statusCode;
    
    return returnObj;


}
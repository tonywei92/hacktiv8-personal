const {verify} = require('../helpers/jwt')

function authentication (req,res,next){
    if( req.headers.access_token ){
        req.user = verify(req.headers.access_token, process.env.JWT_SECRET)
        console.log(req.user)
        next()
    } else {
        throw {
            status:401,
            msg:'Invalid Token'
        }
    }
}

module.exports = authentication
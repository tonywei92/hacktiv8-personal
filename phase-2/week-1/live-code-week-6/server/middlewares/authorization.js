function authorization (req,res,next){
    let id = Number(req.params.id)
    User.findOne({where:{id}})
    .then(data =>{
        if(data.password === req.user.id){
            next()
        } else {
            throw {
                status:403,
                msg:'Forbidden'
            }
        }
    })
}
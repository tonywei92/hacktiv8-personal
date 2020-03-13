module.exports = (err, req, res,next) =>{
    const errors = [];
    if(err.name === "ValidationError"){
        for(let key in err.errors){
            errors.push(err.errors[key].message);
        }
        return res.status(400).json({errors})
    }
    if(err.status === 404){
        errors.push(`${err.resource} not found`);
        return res.status(404).json({errors});
    }
    if(err.status === 403){
        errors.push(`${err.resource} not found`);
        return res.status(403).json({errors});
    }
    errors.push(err.message)
    return res.status(err.status || 500).json({errors});
}
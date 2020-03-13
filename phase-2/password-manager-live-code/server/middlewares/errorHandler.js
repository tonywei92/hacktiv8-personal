'use strict';

function errorHandler(err, req, res, next) {
    console.log(err);
    let status = null;
    let message = null;

    if(err.name === 'JsonWebTokenError') {
        status = 400;
        message = ['Please login first!'];
    } else if(err.name === 'ValidationError') {
        status = 400;
        const arr = [];
        for(const key in err) {
            arr.push(err.errors[key].message);
        }
        message = arr;
    } else {
        status = err.status || 500;
        message = err.message || 'Internal server error';
    }
    res.status(status).json({ error: message });
}

module.exports = errorHandler;
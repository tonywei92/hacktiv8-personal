module.exports = function(err, req, res, next) {
  const stringifiedErr = JSON.stringify(err);

  if (err.code === 404) {
    res.status(err.code).json({
      message: err.resource + ' not found',
    });
  } else if (stringifiedErr.indexOf('ValidatorError') !== -1) {
    const mongooseErrors = err.errors;
    const errors = [];

    for (let key in mongooseErrors) {
      errors.push(mongooseErrors[key].message);
    }
    res.status(400).json({ errors });
  } else if (stringifiedErr.indexOf('E11000') !== -1) {
    let errors = null;

    if (stringifiedErr.indexOf('email') !== -1) {
      errors = ['Email is already in use'];
    } else {
      errors = ['Phone Number is already in use'];
    }

    res.status(400).json({ errors });
  } else {
    console.log(err);

    res.status(500).json({
      message: 'Internal server error, check the console',
    });
  }
};
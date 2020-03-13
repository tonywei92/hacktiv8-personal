const User = require('../models/user');
const Favorite = require('../models/favorite');
const jwt = require('../helpers/token');

module.exports = {
  authenticate(req, res, next) {
    if(req.headers.token) {
      let decoded = jwt.verify(req.headers.token);
      User
       .findOne({
         email: decoded.email
       })
       .then(user => {
         if(user) {
           req.user = decoded;
           next();
         } else {
           res.status(401).json({ err: 'User not registered'});
         }
       })
       .catch(err => {
         res.status(500).json({ err });
       })
    } else {
      res.status(400).json({ err: 'token must provide' });
    }
  },
  authorization(req, res, next) {
    Favorite
     .findById(req.params.id)
     .then(data => {
       if (data) {
         if (data.userId.equals(req.user.id)) {
           next()
         } else {
           res.status(401).json({ err: 'Unauthorized!'});
         }
       } else {
         res.status(404).json({ err: "Data not found!" });
       }
     })
     .catch(err => {
       res.status(500).json({ err });
     })
  }
}

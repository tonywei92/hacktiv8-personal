const Member = require('../models/Member');

class MemberController {
  static create(req, res, next) {
    const { name, address, zipcode, email, phone_number } = req.body;
    Member.create({ name, address, zipcode, email, phone_number })
      .then(function(newMember) {
        res.status(201).json(newMember);
      })
      .catch(next);
  }
}

module.exports = MemberController;

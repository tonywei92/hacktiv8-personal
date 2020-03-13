const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { User } = require('../models');

chai.use(chaiHttp);
chai.should();
describe('User HTTP tests', () =>{
  describe('GET /api/users', () =>{
    it('should return 401 error if no user/admin is logged in', (done) =>{
      chai.request(app)
        .get('/api/users')
        .end(function cb(err, res) {
          res.should.have.status(401);
          done();
        });
    });
  });

  describe('POST register user /api/users', () =>{
    before(() =>{
      User.deleteMany({ email: 'tonywei92@gmail.com' }).exec();
    });
    it('should return 201 if succesfully register', (done) => {
      chai.request(app)
        .post('/api/users/register')
        .type('json')
        .send({ full_name: 'tony', email: 'tonywei92@gmail.com', password: 'secret' })
        .end(function cb(err, res) {
          res.should.have.status(201);
          done();
        });
    });
  });
});

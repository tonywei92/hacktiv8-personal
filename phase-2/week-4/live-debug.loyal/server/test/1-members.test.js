const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const app = require('../app');
const { removeAllMembers } = require('../testHelpers');

chai.use(chaiHttp);

describe('/members', function() {
  after(async function() {
    await removeAllMembers();
  })

  describe('POST /members', function() {
    it('should create a new member - (code: 201)', async function() {
      const data = {
        name: 'Dimitri Wahyudiputra',
        address: 'Jakarta',
        zipcode: '12240',
        email: 'dimitri@mail.com',
        phone_number: '+6281234567890',
      };
      const response = await chai
        .request(app)
        .post('/members')
        .send(data);

      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('_id');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('address');
      expect(response.body).to.have.property('zipcode');
      expect(response.body).to.have.property('email');
      expect(response.body).to.have.property('phone_number');
      expect(response.body.name).to.equal(data.name);
      expect(response.body.address).to.equal(data.address);
      expect(response.body.zipcode).to.equal(data.zipcode);
      expect(response.body.email).to.equal(data.email);
      expect(response.body.phone_number).to.equal(data.phone_number);
    });

    it('should send errors - (Empty body, code: 400)', async function() {
      const data = {};
      const response = await chai
        .request(app)
        .post('/members')
        .send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.be.an('array');
      expect(response.body.errors).to.include('Name is required');
      expect(response.body.errors).to.include('Address is required');
      expect(response.body.errors).to.include('Zipcode is required');
      expect(response.body.errors).to.include('Email is required');
      expect(response.body.errors).to.include('Phone Number is required');
    });

    it('should send an error - (Duplicate email, code: 400)', async function() {
      const data = {
        name: 'Dimitri Wahyudiputra',
        address: 'Jakarta',
        zipcode: '12240',
        email: 'dimitri@mail.com',
        phone_number: '+6281234567890',
      };
      const response = await chai
        .request(app)
        .post('/members')
        .send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.include('Email is already in use');
    });

    it('should send an error - (Duplicate phone_number)', async function() {
      const data = {
        name: 'Dimitri Wahyudiputra',
        address: 'Jakarta',
        zipcode: '12240',
        email: 'another_dimitri@mail.com',
        phone_number: '+6281234567890',
      };
      const response = await chai
        .request(app)
        .post('/members')
        .send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.include('Phone Number is already in use');
    });

    it('should send an error - (Invalid phone_number length, code: 400)', async function() {
      const data = {
        name: 'Dimitri Wahyudiputra',
        address: 'Jakarta',
        zipcode: '12240',
        email: 'dimitri@mail.com',
        phone_number: '1234',
      };
      const response = await chai
        .request(app)
        .post('/members')
        .send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.include('Invalid Phone Number length');
    });
  });
});

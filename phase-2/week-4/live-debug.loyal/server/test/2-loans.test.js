const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiDateTime = require('chai-datetime');
const expect = chai.expect;

const app = require('../app');
const {
  createBook,
  createMember,
  removeAllBooks,
  removeAllMembers,
  removeAllLoans,
} = require('../testHelpers');

chai.use(chaiHttp);
chai.use(chaiDateTime);

let memberId = null;
let bookIds = [];

let loanId = null;

describe('/loans', async function() {
  before(async function() {
    const firstBook = await createBook({
      isbn: '1234567890',
      title: 'Foo',
      author: 'Mr. Foo',
      category: 'Template',
      stock: 1,
    });
    const secondBook = await createBook({
      isbn: '0987654321',
      title: 'Bar',
      author: 'Mr. Bar',
      category: 'Template',
      stock: 1,
    });
    const member = await createMember({
      name: 'Mr. Foobar',
      address: 'Nowhere',
      zipcode: '12345',
      email: 'foobar@mail.com',
      phone_number: '+6281209876543',
    });

    bookIds.push(firstBook._id, secondBook._id);
    memberId = member._id;
  });

  after(async function() {
    await removeAllBooks();
    await removeAllMembers();
    await removeAllLoans();
  });

  describe('POST /loans', function() {
    it('should create a new loan - (code: 201)', async function() {
      const data = {
        member: memberId,
        books: bookIds,
      };
      const response = await chai
        .request(app)
        .post('/loans')
        .send(data);

      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('_id');
      expect(response.body).to.have.property('member');
      expect(response.body).to.have.property('books');
      expect(response.body.books).to.be.an('array');
      expect(response.body).to.have.property('date_loaned');
      expect(response.body).to.not.have.property('date_returned');
      expect(response.body.member).to.equal(memberId.toString());
      expect(response.body.books).to.include(bookIds[0].toString());
      expect(response.body.books).to.include(bookIds[1].toString());
      expect(new Date(response.body.date_loaned)).to.equalDate(new Date());

      loanId = response.body._id;
    });

    it('should send an error - (Empty body, code: 400)', async function() {
      const data = {};
      const response = await chai
        .request(app)
        .post('/loans')
        .send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.include('Member is required');
      expect(response.body.errors).to.include('Book(s) is required');
    });
  });

  describe('GET /loans', function() {
    it('should send loans - (code: 200)', async function() {
      const response = await chai.request(app).get('/loans');

      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');

      const loan = response.body[0];

      expect(loan).to.have.property('_id');
      expect(loan).to.have.property('member');
      expect(loan).to.have.property('books');
      expect(loan).to.have.property('date_loaned');
      expect(loan).to.not.have.property('date_returned');
    });
  });

  describe('PATCH /loans/:id', function() {
    it('should patch a loan, updating its returned_date - (code: 200)', async function() {
      const response = await chai.request(app).patch('/loans/' + loanId);

      expect(response).to.have.status(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('message');
      expect(response.body).to.have.property('date_returned');
      expect(response.body.message).to.equal('Successfully returned');
      expect(new Date(response.body.date_returned)).to.equalDate(new Date());
    });

    it('should send an error - (Not found, code: 404)', async function() {
      const response = await chai.request(app).patch('/loans/foobar');

      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('Loan not found');
    });
  });
});

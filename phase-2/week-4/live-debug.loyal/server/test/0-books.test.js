const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const app = require('../app');
const { removeAllBooks } = require('../testHelpers');

chai.use(chaiHttp);

describe('/books', function() {
  after(async function() {
    await removeAllBooks();
  })

  describe('POST /books', function() {
    it('should create a new book - (code: 201)', async function() {
      const data = {
        isbn: '9781593279509',
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        category: 'Programming',
        stock: 10,
      };
      const response = await chai
        .request(app)
        .post('/books')
        .send(data);

      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('_id');
      expect(response.body).to.have.property('isbn');
      expect(response.body).to.have.property('title');
      expect(response.body).to.have.property('author');
      expect(response.body).to.have.property('category');
      expect(response.body).to.have.property('stock');
      expect(response.body.isbn).to.equal(data.isbn);
      expect(response.body.title).to.equal(data.title);
      expect(response.body.author).to.equal(data.author);
      expect(response.body.category).to.equal(data.category);
      expect(response.body.stock).to.equal(data.stock);
    });

    it('should send errors - (Empty body, code: 400)', async function() {
      const data = {};
      const response = await chai
        .request(app)
        .post('/books')
        .send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.be.an('array');
      expect(response.body.errors).to.include('ISBN is required');
      expect(response.body.errors).to.include('Title is required');
      expect(response.body.errors).to.include('Author is required');
      expect(response.body.errors).to.include('Category is required');
      expect(response.body.errors).to.include('Stock is required');
    });

    it('should send an error - (Invalid ISBN length, code: 400)', async function() {
      const data = {
        isbn: '978159327',
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        category: 'Programming',
        stock: 10,
      };
      const response = await chai
        .request(app)
        .post('/books')
        .send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.include('Invalid ISBN length');
    });

    it('should send an error - (Stock with negative number, code: 400)', async function() {
      const data = {
        isbn: '9781593279509',
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        category: 'Programming',
        stock: -1,
      };
      const response = await chai.request(app).post('/books').send(data);

      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('errors');
      expect(response.body.errors).to.include('Invalid Stock');
    });
  });
});

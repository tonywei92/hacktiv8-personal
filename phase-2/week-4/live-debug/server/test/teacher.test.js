const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../models');
const { queryInterface } = sequelize;
const TEST_TEACHER_EMAIL = 'fooBar@mail.com';
const TEST_TEACHER_PASSWORD = 'pepsiman';
const TEST_INVALID_TEACHER_EMAIL = 'fooBarmail.com';
const TEST_INVALID_TEACHER_PASSWORD = 'cola';

// delete all TEACHERs row after all test
afterAll(done => {
  queryInterface
    .bulkDelete('Teachers', {})
    .then(() => done())
    .catch(err => done(err));
});

// make expect for type of
expect.extend({
  toBeTypeOf(value, argument) {
    const valueType = typeof value;
    let type = '';
    if (valueType === 'object') {
      if (Array.isArray(value)) {
        type = 'array';
      } else {
        type = valueType;
      }
    } else {
      type = valueType;
    }
    if (type === argument) {
      return {
        message: () => `expected ${value} to be type of ${type}`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${value} to be type of ${type}`,
        pass: false
      };
    }
  }
});

describe('Teacher Auth Service', function() {
  describe('Register Succesfully', function() {
    test('Should return status 201 and access_token with encoded id and email', function(done) {
      request(app)
        .post('/register')
        .send({
          email: TEST_TEACHER_EMAIL,
          password: TEST_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          const { access_token } = body;
          const decoded = jwt.decode(access_token, { complete: true });
          expect(status).toBe(201);
          expect(body).toHaveProperty('message', 'Successfully Register');
          expect(body).toHaveProperty('access_token', expect.any(String));
          expect(decoded.payload).toHaveProperty('email', TEST_TEACHER_EMAIL);
          expect(decoded.payload).toHaveProperty('id');
          expect(decoded.payload).not.toHaveProperty('password');

          done();
        });
    });
  });
  describe('Register Validation Error', function() {
    test(`Should return status 400 and object (message, errors),
    when email is invalid`, function(done) {
      request(app)
        .post('/register')
        .send({
          email: TEST_INVALID_TEACHER_EMAIL,
          password: TEST_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('errors');
          expect(body).toHaveProperty('message', 'Validation Error');
          expect(body.errors).toBeTypeOf('array');
          expect(body.errors).toContain('Invalid Email Format');
          done();
        });
    });
    test(`Should return status 400 and object (message, errors),
    when email is null`, function(done) {
      request(app)
        .post('/register')
        .send({
          email: null,
          password: TEST_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('errors');
          expect(body).toHaveProperty('message', 'Validation Error');
          expect(body.errors).toBeTypeOf('array');
          expect(body.errors).toContain('Email is required field');
          done();
        });
    });
    test(`Should return status 400 and object (message, errors),
    when email is already taken`, function(done) {
      request(app)
        .post('/register')
        .send({
          email: TEST_TEACHER_EMAIL,
          password: TEST_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('errors');
          expect(body).toHaveProperty('message', 'Validation Error');
          expect(body.errors).toBeTypeOf('array');
          expect(body.errors).toContain('This email is already taken');
          done();
        });
    });
    test(`Should return status 400 and object (message, errors),
    when password is less than 6 characters`, function(done) {
      request(app)
        .post('/register')
        .send({
          email: TEST_TEACHER_EMAIL,
          password: TEST_INVALID_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('errors');
          expect(body).toHaveProperty('message', 'Validation Error');
          expect(body.errors).toBeTypeOf('array');
          expect(body.errors).toContain('Password at least have 6 characters');
          done();
        });
    });
    test(`Should return status 400 and object (message, errors),
    when password is null`, function(done) {
      request(app)
        .post('/register')
        .send({
          email: TEST_TEACHER_EMAIL,
          password: null
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('errors');
          expect(body).toHaveProperty('message', 'Validation Error');
          expect(body.errors).toBeTypeOf('array');
          expect(body.errors).toContain('Password is required field');
          done();
        });
    });
    test(`Should return status 400 and object (message, errors),
    when both password, email is null`, function(done) {
      request(app)
        .post('/register')
        .send({
          email: null,
          password: null
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('errors');
          expect(body).toHaveProperty('message', 'Validation Error');
          expect(body.errors).toBeTypeOf('array');
          expect(body.errors).toHaveLength(2);
          expect(body.errors).toEqual(
            expect.arrayContaining([
              expect.stringContaining('Password is required field'),
              expect.stringContaining('Email is required field')
            ])
          );
          done();
        });
    });
  });
  describe(`Login Sucessfully`, function() {
    test(`Should return status 200 and access_token with encoded id and email`, function(done) {
      request(app)
        .post('/login')
        .send({
          email: TEST_TEACHER_EMAIL,
          password: TEST_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          const { access_token } = body;
          const decode = jwt.decode(access_token, { complete: true });
          expect(status).toBe(200);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('access_token', expect.any(String));
          expect(body).toHaveProperty('message', 'Successfully Login');
          expect(decode.payload).toHaveProperty('id');
          expect(decode.payload).toHaveProperty('email', TEST_TEACHER_EMAIL);
          expect(decode.payload).not.toHaveProperty('password');
          done();
        });
    });
  });
  describe(`Login Error`, function() {
    test(`Should return status 400 and object (message),
    when email is wrong`, function(done) {
      request(app)
        .post('/login')
        .send({
          email: TEST_INVALID_TEACHER_EMAIL,
          password: TEST_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('message', 'Invalid email or password');
          done();
        });
    });
    test(`Should return status 400 and object (message),
    when password is wrong`, function(done) {
      request(app)
        .post('/login')
        .send({
          email: TEST_TEACHER_EMAIL,
          password: TEST_INVALID_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('message', 'Invalid email or password');
          done();
        });
    });
    test(`Should return status 400 and object (message),
      when email is not declared`, function(done) {
      request(app)
        .post('/login')
        .send({
          password: TEST_TEACHER_PASSWORD
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('message', 'Invalid email or password');
          done();
        });
    });
    test(`Should return status 400 and object (message),
    when password is not declared`, function(done) {
      request(app)
        .post('/login')
        .send({
          email: TEST_TEACHER_EMAIL
        })
        .then(response => {
          const { body, status } = response;
          // expect(status).toBe(400);
          expect(body).toBeTypeOf('object');
          expect(body).toHaveProperty('message', 'Invalid email or password');
          done();
        });
    });
  });
});

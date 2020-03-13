const request = require('supertest');
const app = require('../app');
const { generateToken } = require('../helpers/jwt');
const { sequelize, Teacher } = require('../models');
const jwt = require('jsonwebtoken');
const { queryInterface } = sequelize;

let access_token = '';
let invalid_access_token = '';

// delete all STUDENTS row after all test
afterAll(done => {
  queryInterface
    .bulkDelete('Students', {})
    .then(() => done())
    .catch(err => done(err));
});

// create TEACHER access_token, and invalid_access_token
beforeAll(done => {
  Teacher.create({
    email: 'Johndoe@mail.com',
    password: 'janedoe'
  })
    .then(response => {
      access_token = generateToken({
        id: response.id,
        email: response.email
      });
      return Teacher.create({
        email: 'isro@mail.com',
        password: 'isrogaul'
      });
    })
    .then(response => {
      invalid_access_token = generateToken({
        id: response.id,
        email: response.email
      });
      return Teacher.destroy({
        where: {
          id: response.id
        }
      });
    })
    .then(response => {
      done();
    })
    .catch(err => {
      done(err);
    });
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

describe('Student scoring service', function() {
  describe('Submit student score', function() {
    describe('Successfully submit student score', function() {
      test(`Should return 201 and object (message, student),
      with score result is 'A'`, function(done) {
        request(app)
          .post('/students')
          .send({
            name: 'Budi',
            score: 95
          })
          .set('access_token', access_token)
          .then(response => {
            const { body, status } = response;
            const { payload } = jwt.decode(access_token, { complete: true });
            expect(status).toBe(201);
            expect(body).toHaveProperty('message', 'Successfully submit score');
            expect(body).toHaveProperty('student');
            expect(body.student).toHaveProperty('score', 'A');
            expect(body.student).toHaveProperty('TeacherId', payload.id);
            done();
          });
      });
      test(`Should return 201 and object (message, student),
      with score result is 'D'`, function(done) {
        request(app)
          .post('/students')
          .send({
            name: 'Lala',
            score: 55
          })
          .set('access_token', access_token)
          .then(response => {
            const { body, status } = response;
            const { payload } = jwt.decode(access_token, { complete: true });
            expect(status).toBe(201);
            expect(body).toHaveProperty('message', 'Successfully submit score');
            expect(body).toHaveProperty('student');
            expect(body.student).toHaveProperty('score', 'D');
            expect(body.student).toHaveProperty('TeacherId', payload.id);
            done();
          });
      });
    });
    describe('Fail to submit student score', function() {
      test(`Should return 400 and object (message),
      when input score less than 0`, function(done) {
        request(app)
          .post('/students')
          .send({
            name: 'dimitri',
            score: -25
          })
          .set('access_token', access_token)
          .then(response => {
            const { body, status } = response;
            expect(status).toBe(400);
            expect(body).toHaveProperty(
              'message',
              'Score cannot be less than 0'
            );
            done();
          });
      });
      test(`Should return 400 and object (message),
      when input score greater than 0`, function(done) {
        request(app)
          .post('/students')
          .send({
            name: 'dimitri',
            score: 200
          })
          .set('access_token', access_token)
          .then(response => {
            const { body, status } = response;
            expect(status).toBe(400);
            expect(body).toHaveProperty(
              'message',
              'Score cannot be greater than 100'
            );
            done();
          });
      });
      test(`Should return 401 and object (message),
      when submit without access_token`, function(done) {
        request(app)
          .post('/students')
          .send({
            name: 'dimitri',
            score: 200
          })
          .then(response => {
            const { body, status } = response;
            expect(status).toBe(401);
            expect(body).toHaveProperty('message', 'Authentication failed');
            done();
          });
      });
      test(`Should return 401 and object (message),
      when submit with invalid access_token`, function(done) {
        request(app)
          .post('/students')
          .send({
            name: 'arnold',
            score: 88
          })
          .set('access_token', invalid_access_token)
          .then(response => {
            const { body, status } = response;
            expect(status).toBe(401);
            expect(body).toHaveProperty('message', 'Authentication failed');
            done();
          });
      });
      test(`Should return 400 and object (message, errors),
      when student name is not defined`, function(done) {
        request(app)
          .post('/students')
          .send({
            score: 66
          })
          .set('access_token', access_token)
          .then(response => {
            const { body, status } = response;
            expect(status).toBe(400);
            expect(body).toHaveProperty('errors');
            expect(body).toHaveProperty('message', 'Validation Error');
            expect(body.errors).toBeTypeOf('array');
            expect(body.errors).toContain('Student name should not empty');
            done();
          });
      });
    });
  });
});

// const request = require('supertest-as-promised');
// const httpStatus = require('http-status');
// const jwt = require('jsonwebtoken');
// const chai = require('chai'); // eslint-disable-line import/newline-after-import
// const expect = chai.expect;
// const app = require('../../../index');
// const config = require('../../../config/config');

// chai.config.includeStack = true;

// describe('## Auth APIs', () => {
//   const validUserCredentials = {
//     userName: 'abc',
//     password: 'abc'
//   };

//   const invalidUserCredentials = {
//     userName: 'abc',
//     password: 'abc'
//   };


//   // describe('# POST /api/auth/login', () => {
//   //   it('should return Authentication error', (done) => {
//   //     request(app)
//   //       .post('/api/auth/login')
//   //       .send(invalidUserCredentials)
//   //       .expect(httpStatus.UNAUTHORIZED)
//   //       .then((res) => {
//   //         expect(res.body.message).to.equal('Authentication error');
//   //         done();
//   //       })
//   //       .catch(done);
//   //   });

//   //   it('should get valid JWT token', (done) => {
//   //     request(app)
//   //       .post('/api/auth/login')
//   //       .send(validUserCredentials)
//   //       .expect(httpStatus.OK)
//   //       .then((res) => {
//   //         expect(res.body).to.have.property('token');
//   //         jwt.verify(res.body.token, config.jwtSecret, (err, decoded) => {
//   //           expect(err).to.not.be.ok; // eslint-disable-line no-unused-expressions
//   //           expect(decoded.username).to.equal(validUserCredentials.username);

//   //           done();
//   //         });
//   //       })
//   //       .catch(done);
//   //   });
//   // });
// });

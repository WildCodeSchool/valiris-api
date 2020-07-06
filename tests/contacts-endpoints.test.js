const request = require('supertest');
const app = require('../server.js');
const _ = require('lodash');

describe('contact endpoints', () => {
  describe('POST /contacts', () => {
    describe('when the payload is valid', () => {
      it('returns 201 status code and the updated object when everything is provided', async () => {
        const validContact = {
          lastname: 'Trapet',
          firstname: 'Lancelot',
          email: 'lens78@gmail.com',
          phone: '600000000',
          message: 'hello world',
          apartment: '3',
          startDate: '2020-07-03',
          endDate: '2020-07-17'
        };
        return request(app).post('/contacts').send(validContact).expect(201).then(res => {
          expect(_.isPlainObject(res.body));
          expect(res.body).toHaveProperty('lastname');
          expect(res.body).toHaveProperty('email');
          expect(res.body).toHaveProperty('content');
          expect(res.body.firstname).toBe('Lancelot');
        });
      });
    });
  });
});
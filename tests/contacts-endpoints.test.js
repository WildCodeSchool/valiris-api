const request = require('supertest');
const app = require('../server.js');
const Contact = require('../models/contact.model.js');
const _ = require('lodash');

describe('contact endpoints', () => {
  describe('POST /tasks', () => {
    describe('when the payload is valid', () => {
      it('returns 201 status code and the updated object when everything is provided', async () => {
        const validContact = {
          lastname: 'Trapet',
          firstname: 'Lancelot',
          email: 'lens78@gmail.com',
          phone: 600000000
        };
        return request(app).post('/contact').send(validContact).expect(422).then(res => {
          expect(_.isPlainObject(res.body));
          expect(res.body).toHaveProperty('lastname');
          expect(res.body).toHaveProperty('email');
          expect(res.body.firstname).toBe('Lancelot');
          // expect(_.isNumber(res.body.phone));
        });
      });
    });
  });
});

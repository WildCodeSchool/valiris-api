const request = require('supertest');
const app = require('../server.js');
const _ = require('lodash');


  describe('GET /contacts/new', () => {
      it('returns 201 status code and the updated object when everything is provided', async () => {
        const validContact = {
          lastname: 'Trapet',
          firstname: 'Lancelot',
          email: 'lens78@gmail.com',
          phone: '600000000',
        };
        return request(app).post('contacts/new').send(validContact).then(res => {
          expect(_.isPlainObject(res.body));
          expect(res.body).toHaveProperty('lastname');
          expect(res.body).toHaveProperty('email');
          expect(res.body.firstname).toBe('Lancelot');
        });
      });
    });


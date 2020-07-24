const request = require('supertest');
const app = require('../server.js');
const _ = require('lodash');

describe('apartment endpoints', () => {
  describe('Get /apartments/:id', () => {
    describe('when the payload is valid', () => {
      it('returns 200 status code and the list of apartment', async () => {
        return request(app).get('/apartments/1').expect(200).then(res => {
          expect(_.isPlainObject(res.body));
        });
      });
    });
  });
});

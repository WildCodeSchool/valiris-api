const request = require('supertest');
const app = require('../server.js');
const Apartment = require('../models/apartment.model.js');
const _ = require('lodash');

describe('apartment endpoints', () => {
  describe('Get /apartments/:id', () => {
    describe('when the payload is valid', () => {
      Apartment.create({
        name: 'Test apartment',
        week_price: 220,
        month_price: 440,
        details_fr: 'details fr',
        details_en: 'details en',
        title_fr: 'title fr',
        title_en: 'title en',
        main_picture_url: 'main_picture'
      });

      it('returns 200 status code and the list of apartment', () => {
        return request(app).get('/apartments/1').expect(200).then(res => {
          expect(_.isPlainObject(res.body));
        });
      });
    });
  });
});

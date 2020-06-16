const db = require('../db.js');
const Joi = require('@hapi/joi');

class Apartment {
    static async findById(id) {
        return db.query('SELECT * FROM apartment JOIN secondary_picture ON apartment.id = secondary_picture.id_apartment WHERE apartment.id = ?', [parseInt(id, 10)])
        .then(rows => rows[0] ? rows[0] : null);
    }
}

module.exports = Apartment;
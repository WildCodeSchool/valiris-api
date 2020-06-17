const db = require('../db.js');
const Joi = require('@hapi/joi');

class Contact {
  contructor (contact) {
    this.id = contact.id;
    this.lastname = contact.lastname;
    this.firstname = contact.firstname;
    this.phone = contact.phone;
    this.email = contact.email;
  }

  static validate (attributes) {
    const schema = Joi.object({
      lastname: Joi.string().min(1).max(40).required(),
      firstname: Joi.string().min(1).max(40).required(),
      email: Joi.string().email().required(),
      phone: Joi.string().min(5).max(15)
      // pattern(new Regexp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/))
    });
    return schema.validate(attributes);
  }

  static async createContact (newContact) {
    return db.query('INSERT INTO contact SET ?', newContact)
      .then(res => {
        newContact.id = res.insertId;
        return newContact;
      });
  }

  static async findByEmail (email) {
    return db.query('SELECT * FROM contact WHERE email = ? ', [email])
      .then(rows => {
        if (rows.length) {
          return Promise.resolve(rows[0]);
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async contactAlreadyExists (contactEmail) {
    return db.query('SELECT COUNT(id) AS count FROM contact WHERE email = ?', [contactEmail]).then(rows => {
      if (rows[0].count) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    });
  }
}

module.exports = Contact;

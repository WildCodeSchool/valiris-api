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
      phone: Joi.number().min(5).max(15)
      // pattern(new Regexp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/))
    });
    return schema.validate(attributes);
  }

  static async create (newContact) {
    return db.query('INSERT INTO contact SET ?', newContact)
      .then(res => {
        newContact.id = res.insertId;
        return newContact;
      });
  }
}

module.exports = Contact;

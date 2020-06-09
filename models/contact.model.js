const db = require('../db.js');

class Contact {
  contructor (contact) {
    this.id = contact.id;
    this.last_name = contact.last_name;
    this.first_name = contact.first_name;
    this.phone = contact.phone;
    this.email = contact.email;
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
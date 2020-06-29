const db = require('../db.js');

class Booking {
  static async getAllNotValidated (req) {
    return db.query('SELECT c.firstname, c.lastname, c.phone, c.email, b.starting_date, b.ending_date FROM booking b JOIN contact c ON b.id_contact = c.id WHERE b.validation = 0')
      .then(rows => rows || null);
  }
}

module.exports = Availabilities;
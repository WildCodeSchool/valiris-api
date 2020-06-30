const db = require('../db.js');

class Booking {
  static async getAll () {
    return db.query('SELECT c.firstname, c.lastname, b.starting_date, b.ending_date FROM booking b JOIN contact c ON c.id = b.id_contact WHERE validation = 0');
  }

  static async createBooking (newBooking, contactId) {
    const fullBooking = { ...newBooking, id_contact: contactId, validation: 0 };
    return db.query('INSERT INTO booking SET ?', fullBooking)
      .then(res => {
        newBooking.id = res.insertId;
        newBooking.id_contact = contactId;
        return newBooking;
      });
  }
}

module.exports = Booking;

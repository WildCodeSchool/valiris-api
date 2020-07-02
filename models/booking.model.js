const db = require('../db.js');

class Booking {
  static async getAll () {
    return db.query('SELECT DISTINCT b.id, c.firstname, c.lastname, b.starting_date, b.ending_date, m.content, b.validation FROM booking b JOIN contact c ON c.id = b.id_contact JOIN message m ON b.id = m.id_booking WHERE validation = 0').then(res => {
      console.log(res)
      return res
    });
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

  static async updateOne (bookingDetails) {
    return db.query('UPDATE booking SET validation = 1 WHERE id = ?', [bookingDetails.id])
      .then(row => db.query(`SELECT * FROM booking WHERE id = ${bookingDetails.id}`));
  }
}

module.exports = Booking;

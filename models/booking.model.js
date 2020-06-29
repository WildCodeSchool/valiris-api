const db = require('../db.js');

class Booking {
  static async getAll () {
    return db.query('SELECT c.firstname, c.lastname, b.starting_date, b.ending_date FROM booking b JOIN contact c ON c.id = b.id_contact WHERE validation = 0')
  }
}

module.exports = Booking;
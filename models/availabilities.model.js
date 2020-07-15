const db = require('../db.js');

class Availabilities {
  static async getById (apartmentId) {
    return db.query('SELECT apartment.name, booking.id, DATE_FORMAT(starting_date, "%Y-%m-%d") as starting_date, DATE_FORMAT(booking.ending_date, "%Y-%m-%d") as ending_date, id_apartment FROM booking LEFT JOIN apartment ON apartment.id = booking.id_apartment WHERE id_apartment = ? AND booking.validation = 1', [apartmentId])
      .then(rows => rows || null);
  }

  static async getAll () {
    return db.query(`
    SELECT 
    apartment.name, 
    booking.id, 
    DATE_FORMAT(starting_date, "%Y-%m-%d") as starting_date, 
    DATE_FORMAT(booking.ending_date, "%Y-%m-%d") as ending_date, 
    id_apartment, 
    contact.firstname, 
    contact.lastname,
    booking.validation
    FROM booking LEFT JOIN apartment ON apartment.id = booking.id_apartment 
    LEFT JOIN contact ON contact.id = booking.id_contact
    ORDER BY starting_date DESC`)
      .then(rows => rows || null);
  }
}

module.exports = Availabilities;

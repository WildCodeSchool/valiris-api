const db = require('../db.js');

class Availabilities {
/*   constructor (availabilities) {
    this.id = availabilities.id;
    this.starting_date = availabilities.starting_date;
    this.ending_date = availabilities.ending_date;
    this.id_apartmenet = availabilities.id_apartmenet;
  } */

  static async getById (apartmentId) {
    return db.query('SELECT apartment.name, booking.id, DATE_FORMAT(starting_date, "%Y-%m-%d") as starting_date, DATE_FORMAT(booking.ending_date, "%Y-%m-%d") as ending_date, id_apartment FROM booking JOIN apartment ON apartment.id = booking.id_apartment WHERE id_apartment = ?', [apartmentId])
      .then(rows => rows || null);
  }
}

module.exports = Availabilities;

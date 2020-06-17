const db = require('../db.js');

class Availabilities {
/*   constructor (availabilities) {
    this.id = availabilities.id;
    this.starting_date = availabilities.starting_date;
    this.ending_date = availabilities.ending_date;
    this.id_apartmenet = availabilities.id_apartmenet;
  } */

  static async getById (apartmentId) {
    return db.query('SELECT id, starting_date, ending_date, id_apartment FROM booking WHERE id_apartment = ?', [apartmentId])
      .then(rows => rows[0] ? rows[0] : null);
  }
}

module.exports = Availabilities;

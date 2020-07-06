const db = require('../db.js');

class Booking {
  static async getAll () {
    return db.query('SELECT DISTINCT b.id, c.firstname, c.lastname, c.phone, c.email, b.starting_date, b.ending_date, m.content, b.validation FROM booking b LEFT JOIN contact c ON c.id = b.id_contact LEFT JOIN message m ON b.id = m.id_booking WHERE validation = 0 AND starting_date IS NOT NULL AND ending_date IS NOT NULL');
  }

  static async getAllInfos () {
    return db.query('SELECT DISTINCT b.id, c.firstname, c.lastname, c.phone, c.email, m.content, b.validation FROM booking b LEFT JOIN contact c ON c.id = b.id_contact LEFT JOIN message m ON b.id = m.id_booking WHERE b.starting_date IS NULL');
  }

  static async getOne (id) {
    return db.query(
      `SELECT DISTINCT 
      b.id, 
      c.firstname, 
      c.lastname, 
      c.phone, 
      c.email,
      b.starting_date,
      b.ending_date,
      m.content, 
      b.validation,
      b.id_apartment
      FROM booking b 
      LEFT JOIN contact c 
      ON c.id = b.id_contact 
      LEFT JOIN message m 
      ON b.id = m.id_booking 
      WHERE b.id = ?`, [parseInt(id, 10)])
      .then(rows => {
        if (rows.length) {
          const c = rows[0];
          return Promise.resolve({
            id: c.id,
            firstname: c.firstname,
            lastname: c.lastname,
            phone: c.phone,
            email: c.email,
            starting_date: c.starting_date,
            ending_date: c.ending_date,
            message: c.content,
            validation: c.validation,
            id_apartment: c.id_apartment
          });
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
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

  static async validateOne (bookingDetails) {
    return db.query('UPDATE booking SET validation = 1 WHERE id = ?', [bookingDetails.id])
      .then(row => db.query(`SELECT * FROM booking WHERE id = ${bookingDetails.id}`));
  }

  static async updateById (id, booking) {
    return db.query(
      'UPDATE booking SET id_apartment = ?, starting_date = ?, ending_date = ? WHERE id = ?',
      [booking.id_apartment, booking.starting_date, booking.starting_date, parseInt(id, 10)]
    ).then(() => this.getOne(id));
  }

  static async remove (id) {
    return db.query('DELETE FROM booking WHERE id = ?', [id]).then(res => {
      if (res.affectedRows !== 0) {
        return Promise.resolve();
      } else {
        const err = new Error();
        err.kind = 'not_found';
        return Promise.reject(err);
      }
    });
  }
}

module.exports = Booking;

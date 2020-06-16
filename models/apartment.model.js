const db = require('../db.js');

class Apartment {
  // constructor (appartment) {
  //   this.id = appartment.id;
  //   this.name = appartment.name;
  //   this.detail_fr = appartment.detail_fr;
  //   this.detail_en = appartment.detail_en;
  //   this.week_price = appartment.week_price;
  //   this.month_price = appartment.month_price;
  //   this.main_picture_url = appartment.main_picture_url;
  //   this.secondary_picture_url = appartment.secondary_picture_url;
  // }

  static async getAll (result) {
    return db.query('SELECT * FROM apartment');
  }
}

module.exports = Apartment;
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

  static async findById (id) {
    return db.query('SELECT * FROM apartment JOIN secondary_picture ON apartment.id = secondary_picture.id_apartment WHERE apartment.id = ?', [parseInt(id, 10)])
      .then(rows => rows[0] ? rows[0] : null);
    //   .then(rows => {
    //     if (rows){
    //     tab= []
    //     rows.foreach(r => {
    //       tab.push(r.url)
    //     })
    //     rows[0].url = tab
    //     return rows[0]
    //   } else {
    //     return null
    //   }
    // })
  }

  static async getAll (result) {
    return db.query('SELECT * FROM apartment');
  }
}

module.exports = Apartment;

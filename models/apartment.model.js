const db = require('../db.js');

class Apartment {
  constructor (appartment) {
    this.id = appartment.id;
    this.name = appartment.name;
    this.detail_fr = appartment.detail_fr;
    this.detail_en = appartment.detail_en;
    this.title_fr = appartment.title_fr;
    this.title_en = appartment.title_en;
    this.week_price = appartment.week_price;
    this.month_price = appartment.month_price;
    this.main_picture_url = appartment.main_picture_url;
    this.secondary_picture_url = appartment.secondary_picture_url;
  }

  static async findById (id, lang) {
    return db.query(`SELECT a.id, a.name, a.details_${lang}, a.week_price, a.month_price, a.title_${lang}, a.main_picture_url, sp.id , sp.url FROM apartment a JOIN secondary_picture sp ON a.id = sp.id_apartment WHERE a.id = ?`, [parseInt(id, 10)])
      .then(rows => {
        if (rows) {
          const tabUrl = [];
          rows.forEach(r => {
            tabUrl.push(r.url);
          });
          return {
            id: rows[0].id,
            name: rows[0].name,
            details: rows[0].details_fr || rows[0].details_en,
            title: rows[0].title_fr || rows[0].title_en,
            weekPrice: rows[0].week_price,
            monthPrice: rows[0].month_price,
            mainPictureUrl: rows[0].main_picture_url,
            url: tabUrl
          };
        } else {
          return null;
        }
      });
  }

  // .then(rows => rows ? rows : null)

  static async getAll (lang) {
    return db.query(`SELECT id, name, details_${lang}, week_price, month_price, title_${lang}, main_picture_url FROM apartment`)
      .then(res => {
        return res.map(r => {
          return {
            id: r.id,
            name: r.name,
            details: r.details_fr || r.details_en,
            title: r.title_fr || r.title_en,
            weekPrice: r.week_price,
            monthPrice: r.month_price,
            mainPictureUrl: r.main_picture_url
          };
        });
      });
  }
}

module.exports = Apartment;

const db = require('../db.js');
const Joi = require('@hapi/joi');

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

  static validate (attributes) {
    const schema = Joi.object({
      name: Joi.string().min(1).max(40).required(),
      details_fr: Joi.string().min(1).required(),
      details_en: Joi.string().min(1).required(),
      title_fr: Joi.string().min(1).required(),
      title_en: Joi.string().min(1).required(),
      week_price: Joi.number().required(),
      month_price: Joi.number().required(),
      main_picture_url: Joi.required()
    });
    return schema.validate(attributes);
  }

  static async findById (id, lang = 'fr') {
    const detailsLang = `details_${lang}`;
    const titleLang = `title_${lang}`;

    return db.query(`
      SELECT 
      a.id, 
      a.name, 
      a.${detailsLang}, 
      a.week_price, 
      a.month_price, 
      a.${titleLang}, 
      a.main_picture_url, 
      sp.id , 
      sp.url 
      FROM apartment a LEFT JOIN secondary_picture sp ON a.id = sp.id_apartment 
      WHERE a.id = ?`, [parseInt(id, 10)])
      .then(rows => {
        if (rows.length) {
          const tabUrl = [];
          rows.forEach(r => {
            if (r.url) tabUrl.push(r.url);
          });
          const a = rows[0];
          return Promise.resolve({
            id: a.id,
            name: a.name,
            details: a[detailsLang],
            title: a[titleLang],
            weekPrice: a.week_price,
            monthPrice: a.month_price,
            mainPictureUrl: a.main_picture_url,
            url: tabUrl
          });
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async getAll (lang) {
    const detailsLang = `details_${lang}`;
    const titleLang = `title_${lang}`;

    return db.query(`SELECT id, name, ${detailsLang}, week_price, month_price, ${titleLang}, main_picture_url FROM apartment`)
      .then(res => {
        return res.map(r => {
          return {
            id: r.id,
            name: r.name,
            details: r[detailsLang],
            title: r[titleLang],
            weekPrice: r.week_price,
            monthPrice: r.month_price,
            mainPictureUrl: r.main_picture_url
          };
        });
      });
  }

  static async getOneBack (id) {
    return db.query(`
      SELECT  
      a.id, 
      a.name, 
      a.details_fr,
      a.details_en,
      a.week_price, 
      a.month_price, 
      a.title_fr,
      a.title_en,
      a.main_picture_url,
      sp.id,
      sp.url
      FROM apartment a LEFT JOIN secondary_picture sp ON a.id = sp.id_apartment WHERE a.id = ?`, [id])
      .then(rows => {
        if (rows.length) {
          const tabUrl = [];
          rows.forEach(r => {
            if (r.url) tabUrl.push({ url: r.url, id: r.id });
          });
          return Promise.resolve({ ...rows[0], urlSecondaryPictures: tabUrl });
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async create (newApartment) {
    return db.query('INSERT INTO apartment SET ?', [newApartment])
      .then(res => {
        newApartment.id = res.insertId;
        return newApartment;
      });
  }

  static async createSecondaryPictures (newSecondaryPicture) {
    return db.query('INSERT INTO secondary_picture SET ?', [newSecondaryPicture])
      .then(res => {
        newSecondaryPicture.id = res.insertId;
        return newSecondaryPicture;
      });
  }

  static async updateById (updatedApartment, id) {
    return db.query('UPDATE apartment SET ? WHERE id = ?', [updatedApartment, id])
      .then(() => {
        return updatedApartment;
      });
  }

  static async updateSecondaryPictures (newSecondaryPicture, id) {
    return db.query('UPDATE secondary_picture SET url = ? WHERE id = ?', [newSecondaryPicture, id])
      .then(() => {
        return newSecondaryPicture;
      });
  }

  static async remove (id) {
    return db.query('DELETE FROM apartment WHERE id = ?', [id])
      .then(res => {
        if (res.affectedRows !== 0) {
          return Promise.resolve();
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async removeSecondary (id) {
    return db.query('DELETE FROM secondary_picture WHERE id = ?', [id])
      .then(res => {
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

module.exports = Apartment;

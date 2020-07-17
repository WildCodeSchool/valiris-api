const db = require('../db.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

class User {
  static validateInfos (attributes) {
    const schema = Joi.object({
      email: Joi.string().email().required().pattern(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}/)),
      name: Joi.string().max(40)
    });
    return schema.validate(attributes);
  }

  static validatePassword (attributes) {
    const schema = Joi.object({
      password: Joi.string().min(5).max(30)
    });
    return schema.validate(attributes);
  }

  static async create (name, email, password) {
    const hash = await argon2.hash(password);
    return db.query('insert into users (name, email, encrypted_password) values (?, ?, ?)', [name, email, hash])
      .then(res => ({ id: res.insertId, name, email }));
  }

  static async userAlreadyExists (email) {
    return db.query('SELECT COUNT(id) AS count FROM users WHERE email = ?', [email]).then(rows => {
      if (rows[0].count) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    });
  }

  static async userAlreadyExistsUpdate (email) {
    return db.query('SELECT COUNT(id) AS count FROM users WHERE email = ?', [email]).then(rows => {
      if (rows[0].count > 1) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    });
  }

  static async findById (id) {
    return db.query('select * from users where id = ?', [id])
      .then(rows => rows[0] ? rows[0] : null);
  }

  static async findByEmail (email) {
    return db.query('select * from users where email = ?', [email])
      .then(rows => rows[0] ? rows[0] : null);
  }

  static async login (email, password) {
    const user = await User.findByEmail(email);
    if (!user) {
      throw new Error('user not found');
    } else {
      const passwordIsValid = await argon2.verify(user.encrypted_password, password);
      if (!passwordIsValid) {
        throw new Error('incorrect password');
      } else {
        const data = { name: user.name, id: user.id };
        const token = jwt.sign(data, JWT_PRIVATE_KEY, { expiresIn: '24h' });
        return Promise.resolve({ token, data });
      }
    }
  }

  static async updateById (id, email) {
    return db.query(
      'UPDATE users SET email = ? WHERE id = ?',
      [email, id]
    ).then(() => this.findById(id));
  }

  static async updatePasswordById (id, password) {
    const hash = await argon2.hash(password);
    return db.query(
      'UPDATE users SET encrypted_password = ? WHERE id = ?',
      [hash, id]
    ).then(() => this.findById(id));
  }
}

module.exports = User;

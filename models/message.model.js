const db = require('../db.js');
const Joi = require('@hapi/joi');


class Message {
  contructor (message) {
    this.id = message.id;
    this.content = message.content;
  }

  static validate (attributes) {
    const schema = Joi.object({
      content: Joi.string().required()
    });
    return schema.validate(attributes);
  }

  static async createMessage (newMessage) {
    return db.query('INSERT INTO message SET ?', newMessage)
      .then(res => {
        newMessage.id = res.insertId;
        return newMessage;
      });
  }
}

module.exports = Message;

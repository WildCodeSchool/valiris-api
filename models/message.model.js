const db = require('../db.js');
const Joi = require('@hapi/joi');

class Message {
  contructor (message) {
    this.id = message.id;
    this.content = message.content;
    this.id_contact = message.id_contact;
  }

  static validate (attributes) {
    const schema = Joi.object({
      content: Joi.string().required()
    });
    return schema.validate(attributes);
  }

  static async createMessage (newMessage, newContactId, newBookingId) {
    const fullMessage = { ...newMessage, id_contact: newContactId, id_booking: newBookingId };
    return db.query('INSERT INTO message SET ?', fullMessage)
      .then(res => {
        newMessage.id = res.insertId;
        newMessage.id_contact = newContactId;
        newMessage.id_booking = newBookingId
        return newMessage;
      });
  }
}

module.exports = Message;

const Message = require('../models/message.model.js');

class messageController {
  static async create (req, res) {
    const clientPayload = req.body;
    const { error } = Message.validate(clientPayload);
    if (error) {
      console.error(error);
      return res.status(422).send({ errorMessage: error.message, errorDetails: error.details });
    } else {
      const newMessage = await Message.create(clientPayload);
      return res.status(201).send(newMessage);
    }
  }
}

module.exports = messageController;

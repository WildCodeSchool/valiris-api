const Contact = require('../models/contact.model.js');
const Message = require('../models/message.model.js');
const Mailer = require('../services/mailer.js');

class formController {
  static async createForm (req, res) {
    const clientPayloadContact = { firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, email: req.body.email };
    const clientPayloadMessage = { content: req.body.message };

    const errorContact = Contact.validate(clientPayloadContact).error;
    const errorMessage = Message.validate(clientPayloadMessage).error;
    if (errorContact) {
      console.log(JSON.stringify(errorContact));
      return res.status(422).send({ errorMessage: errorContact.message, errorDetails: errorContact.details });
    }

    if (errorMessage) {
      console.log(JSON.stringify(errorMessage));
      return res.status(422).send({ errorMessage: errorMessage.message, errorDetails: errorMessage.details });
    }

    const contactExists = await Contact.contactAlreadyExists(clientPayloadContact.email);
    if (contactExists) {
      const newMessage = await Message.createMessage(clientPayloadMessage);
      return res.status(201).send(newMessage);
    }

    const newContact = await Contact.createContact(clientPayloadContact);
    const newMessage = await Message.createMessage(clientPayloadMessage, newContact.id);
    await Mailer.sendMail(req.body);
    return res.status(201).send({ ...newContact, ...newMessage });
  }

  // static async createMessage (req, res) {
  //   const clientPayload = { content: req.body.message };
  //   const { error } = Message.validate(clientPayload);
  //   if (error) {
  //     console.log(JSON.stringify(error));
  //     return res.status(422).send({ errorMessage: error.message, errorDetails: error.details });
  //   } else {
  //     const newMessage = await Message.createMessage(clientPayload);
  //     return res.status(201).send(newMessage);
  //   }
  // }
}

module.exports = formController;

const Contact = require('../models/contact.model.js');

class formController {
  static async createContact (req, res) {
    const clientPayload = req.body;

    const { error } = Contact.validate(clientPayload);
    if (error) {
      console.log(JSON.stringify(error));
      return res.status(422).send({ errorMessage: error.message, errorDetails: error.details });
    }

    const contactExists = await Contact.contactAlreadyExists(clientPayload.email);
    if (contactExists) {
      return res.status(409).send({ errorMessage: 'Un utilisateur avec cette adresse est déja enregirstré' });
    }

    const newContact = await Contact.createContact(clientPayload);
    return res.status(201).send(newContact);
  }

  // static async createMessage (req, res) {
  //   const clientPayload = req.body;
  //   const { error } = Message.validate(clientPayload);
  //   console.log(clientPayload);
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

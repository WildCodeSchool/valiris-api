const Contact = require('../models/contact.model.js');

class formController {
  static async createContact (req, res) {
    const clientPayload = req.body;
    const { error } = Contact.validate(clientPayload);
    console.log(clientPayload);
    if (error) {
      console.log(JSON.stringify(error));
      return res.status(422).send({ errorMessage: error.message, errorDetails: error.details });
    } else {
      const newContact = await Contact.create(clientPayload);
      return res.status(201).send(newContact);
    }
  }
}

module.exports = formController;

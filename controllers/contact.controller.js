const Contact = require('../models/contact.model.js');
const Message = require('../models/message.model.js');
const Mailer = require('../services/mailer.js');
const Booking = require('../models/booking.model.js');

class contactController {
  static async createForm (req, res) {
    const clientPayloadContact = { firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, email: req.body.email };
    const clientPayloadMessage = { content: req.body.message };
    const clientPayloadBooking = { id_apartment: req.body.apartment, starting_date: req.body.startDate, ending_date: req.body.endDate}

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
      const findExistcontact = await Contact.findByEmail(clientPayloadContact.email);
      const newMessage = await Message.createMessage(clientPayloadMessage, findExistcontact.id);
      const newBooking = await Booking.createBooking(clientPayloadBooking, findExistcontact.id);
      await Mailer.sendMail(req.body, req.currentLanguage);
      return res.status(201).send({ ...newMessage, ...newBooking });
    }

    const newContact = await Contact.createContact(clientPayloadContact);
    const newMessage = await Message.createMessage(clientPayloadMessage, newContact.id);
    const newBooking = await Booking.createBooking(clientPayloadBooking, newContact.id);
    await Mailer.sendMail(req.body, req.currentLanguage);
    return res.status(201).send({ ...newContact, ...newMessage, ...newBooking });
  }
}

module.exports = contactController;

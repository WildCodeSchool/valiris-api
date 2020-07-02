const Mailer = require('../services/mailer.js');
const Contact = require('../models/contact.model.js');
const Message = require('../models/message.model.js');
const Booking = require('../models/booking.model.js');

class contactController {
  static async createForm (req, res) {
    const clientPayloadContact = { firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, email: req.body.email };
    const clientPayloadMessage = { content: req.body.message };
    const clientPayloadBooking = { id_apartment: req.body.apartment, starting_date: req.body.startDate, ending_date: req.body.endDate };

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
      const newBooking = await Booking.createBooking(clientPayloadBooking, findExistcontact.id);
      const newMessage = await Message.createMessage(clientPayloadMessage, findExistcontact.id, newBooking.id);
      await Mailer.sendMail(req.body, req.currentLanguage);
      return res.status(201).send({ ...newMessage, ...newBooking });
    }

    const newContact = await Contact.createContact(clientPayloadContact);
    const newBooking = await Booking.createBooking(clientPayloadBooking, newContact.id);
    const newMessage = await Message.createMessage(clientPayloadMessage, newContact.id, newBooking.id);
    await Mailer.sendMail(req.body, req.currentLanguage);
    console.log({ ...newContact, ...newMessage, ...newBooking })
    return res.status(201).send({ ...newContact, ...newMessage, ...newBooking });
  }

  static async findAll (req, res) {
    try {
      const data = await Contact.getAll();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving contacts.'
      });
    }
  }

  static async createContact (req, res) {
    try {
      const contactExists = await Contact.contactAlreadyExists(req.body.email);
      if (contactExists) {
        res.status(400).send({ errorMessage: 'Email already extist' });
      } else {
        const newContact = await Contact.createContact(req.body);
        res.status(200).send(newContact);
      }
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while creating the contact.'
      });
    }
  }

  static async findOne (req, res) {
    try {
      const data = await Contact.findById(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Contact with id ${req.params.id} not found.` });
      } else {
        console.log(err);
        res.status(500).send({ errorMessage: 'Error retrieving contact with id ' + req.params.id });
      }
    }
  }

  static async update (req, res) {
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }

    try {
      const data = await Contact.updateById(req.params.id, req.body);
      res.status(200).send(data);
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Contact with id ${req.params.id} not found.` });
      } else {
        res.status(500).send({ errorMessage: 'Error updating contact with id ' + req.params.id });
      }
    }
  }

  static async delete (req, res) {
    try {
      await Contact.remove(req.params.id);
      res.send({ message: 'Contact was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found contact with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete contact with id ' + req.params.id + err
        });
      }
    }
  }
}

module.exports = contactController;

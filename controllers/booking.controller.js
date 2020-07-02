const Booking = require('../models/booking.model.js');

class BookingController {
  static async findAll (req, res) {
    try {
      const data = await Booking.getAll();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving booking requests.'
      });
    }
  }

  static async validateOne (req, res) {
    try {
      const data = await Booking.updateOne(req.body);
      res.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        errorMessage: 'An error happened while you tried to validate a booking.'
      });
    }
  }

  static async create (req, res) {
    try {
      console.log(req.body)
      const newBooking = await Booking.createBookingBack(req.body);
      res.status(201).send(newBooking);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while creating the booking.'
      });
    }
  }
}

module.exports = BookingController;

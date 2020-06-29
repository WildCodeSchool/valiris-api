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
}

module.exports = BookingController;

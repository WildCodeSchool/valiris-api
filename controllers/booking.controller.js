const Booking = require('../models/booking.model.js');

class BookingController {
  static async findAllNotValidated (req, res) {
    try {
      const data = await Booking.getAllNotValidated(req);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving customers.'
      });
    }
  }
}

module.exports = BookingController;

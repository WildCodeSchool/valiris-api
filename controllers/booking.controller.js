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
      const data = await Booking.validateOne(req.body);
      res.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        errorMessage: 'An error happened while you tried to validate a booking.'
      });
    }
  }

  static async delete (req, res) {
    try {
      await Booking.remove(req.params.id);
      res.send({ message: 'Booking was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found booking with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete booking with id ' + req.params.id + err
        });
      }
    }
  }
}

module.exports = BookingController;

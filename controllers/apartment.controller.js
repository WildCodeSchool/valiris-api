const Apartment = require('../models/apartment.model.js');

class ApartmentController {

  static async findAll (req, res) {
    try {
      const data = await Apartment.getAll()
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving customers.'
      });
    }
  }
}

module.exports = ApartmentController;
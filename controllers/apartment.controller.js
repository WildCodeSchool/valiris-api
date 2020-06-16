const Apartment = require('../models/apartment.model.js');

class ApartmentsController {
  static async findOne (req, res) {
    try {
      const data = await Apartment.findById(req.params.id);
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Apartment with id ${req.params.id} not found.` });
      } else {
        console.log(err);
        res.status(500).send({ errorMessage: 'Error retrieving Apartment with id ' + req.params.id });
      }
    }
  }
}

module.exports = ApartmentsController;

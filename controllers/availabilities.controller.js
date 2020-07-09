const Availabilities = require('../models/availabilities.model.js');

class AvailabilitiesController {
  static async findAllById (req, res) {
    try {
      const data = await Availabilities.getById(req.params.id);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving availabilities.'
      });
    }
  }

  static async findAll (req, res) {
    try {
      const data = await Availabilities.getAll();
      res.send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving availabilities.'
      });
    }
  }
}

module.exports = AvailabilitiesController;

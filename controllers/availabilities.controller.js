const Availabilities = require('../models/availabilities.model.js');

class AvailabilitiesController {
  static async findAll (req, res) {
    try {
      const data = await Availabilities.getById(req.body.id);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving customers.'
      });
    }
  }
}

module.exports = AvailabilitiesController;

const Apartment = require('../models/apartment.model.js');

class ApartmentController {
  static async findOne (req, res) {
    try {
      const data = await Apartment.findById(req.params.id, req.currentLanguage);
      res.send(data);
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Apartment with id ${req.params.id} not found.` });
      } else {
        console.log(err);
        res.status(500).send({ errorMessage: 'Error retrieving Apartment with id ' + req.params.id });
      }
    }
  }

  static async findAll (req, res) {
    try {
      const data = await Apartment.getAll(req.currentLanguage);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving apartments.'
      });
    }
  }

  static async findOneBack (req, res) {
    try {
      const data = await Apartment.getOneBack(req.params.id);
      res.send(data);
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Apartment with id ${req.params.id} not found.` });
      } else {
        console.log(err);
        res.status(500).send({ errorMessage: 'Error retrieving Apartment with id ' + req.params.id });
      }
    }
  }

  static async create (req, res) {
    try {
      const mainPictureUrl = req.file ? req.file.path : null;
      console.log(req.file);
      const data = await Apartment.createApartment({ ...req.body, mainPictureUrl });
      res.status(201).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || `Some error occurred while trying to create apartment ${req.body.id}.`
      });
    }
  }
}

module.exports = ApartmentController;

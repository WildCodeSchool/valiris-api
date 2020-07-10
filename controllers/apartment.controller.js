const Apartment = require('../models/apartment.model.js');

class ApartmentController {
  static async findOne (req, res) {
    try {
      const data = await Apartment.findById(req.params.id, req.currentLanguage);
      res.status(200).send(data);
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
      res.status(200).send(data.map(data => (
        { ...data, mainPictureUrl: data.main_picture_url ? (req.headers.host + '/' + data.main_picture_url) : undefined }
      )));
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
      const apartmentPayload = { 
        name: req.body.name,
        details_fr: req.body.details_fr,
        details_en: req.body.details_en,
        title_fr: req.body.title_fr,
        title_en: req.body.title_en,
        week_price: req.body.week_price,
        month_price: req.body.month_price,
        main_picture_url: mainPictureUrl
      }

      const errorApartment = Apartment.validate(apartmentPayload).error; 
      if (errorApartment) {
        console.log(errorApartment.message)
        return res.status(422).send({ errorMessage: errorApartment.message, errorDetails: errorApartment.details });
      }

      console.log(req.body)
      const data = await Apartment.createApartment({ ...req.body, main_picture_url: mainPictureUrl });
      res.status(201).send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        errorMessage: err.message || `Some error occurred while trying to create apartment ${req.body.id}.`
      });
    }
  }
}

module.exports = ApartmentController;

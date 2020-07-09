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
      res.status(200).send(data.map(data => (
        { ...data, mainPictureUrl: data.mainPictureUrl ? (req.headers.host + '/' + data.mainPictureUrl) : undefined }
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

  static async upload (req, res) {
    try {
      const currentPicture = req.file ? req.file.path.replace('\\', '/') : null;
      res.status(200).send(currentPicture);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  static async create (req, res) {
    try {
      const appartmentPayload = { name: req.body.name, details_fr: req.body.details_fr, details_en: req.body.details_en, title_fr: req.body.title_fr, title_en: req.body.title_en, week_price: req.body.weekPrice, month_price: req.body.monthPrice, main_picture_url: req.body.mainPicture };
      const newApartment = await Apartment.create(appartmentPayload);

      req.body.secondaryPictures.map(async (url) => {
        const newSecondaryPictures = await Apartment.createSecondaryPictures({ url, id_apartment: newApartment.id });
      });
      res.status(201).send(newApartment);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        errorMessage: err.message || `Some error occurred while trying to create apartment ${req.body.id}.`
      });
    }
  }

  static async update (req, res) {
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }
    try {
      const mainPictureUrl = req.file ? req.file.path : null;
      const data = await Apartment.updateById({ ...req.body, main_picture_url: mainPictureUrl }, req.params.id);
      res.status(200).send(data);
    } catch (err) {

    }
  }

  static async delete (req, res) {
    try {
      await Apartment.remove(req.params.id);
      res.send({ message: 'Apartment was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found contact with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete contact with id ' + req.params.id + err
        });
      }
    }
  }
}

module.exports = ApartmentController;

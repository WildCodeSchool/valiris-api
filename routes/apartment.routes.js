const apartmentsController = require('../controllers/apartment.controller.js');
const availabilitiesController = require('../controllers/availabilities.controller.js');
const router = require('express').Router();

router.get('/:id', apartmentsController.findOne);
router.get('/:id/availabilities', availabilitiesController.findAll);
router.get('/', apartmentsController.findAll);

module.exports = router;

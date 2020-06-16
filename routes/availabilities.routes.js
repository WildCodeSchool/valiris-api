const availabilitiesController = require('../controllers/availabilities.controller.js');
const router = require('express').Router();

router.get('/:id/availabilities', availabilitiesController.findAll);

module.exports = router;

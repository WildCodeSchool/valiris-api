const contactController = require('../controllers/booking.controller.js');
const router = require('express').Router();

router.get('/', bookingController.createForm);

module.exports = router;
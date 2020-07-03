const bookingController = require('../controllers/booking.controller.js');
const router = require('express').Router();

router.get('/', bookingController.findAll);
router.patch('/', bookingController.validateOne);
router.delete('/:id', bookingController.delete);

module.exports = router;

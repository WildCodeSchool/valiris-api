const bookingController = require('../controllers/booking.controller.js');
const router = require('express').Router();

router.get('/', bookingController.findAll);
router.get('/:id', bookingController.findOne);
router.post('/', bookingController.create);
router.patch('/', bookingController.validateOne);
router.patch('/:id', bookingController.update);
router.delete('/:id', bookingController.delete);

module.exports = router;

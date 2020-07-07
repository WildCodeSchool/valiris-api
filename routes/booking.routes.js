const bookingController = require('../controllers/booking.controller.js');
const router = require('express').Router();

router.get('/', bookingController.findAll);
router.get('/:id', bookingController.findOne);
router.post('/', bookingController.create);
router.get('/requests/infos', bookingController.findAllInfos);
router.patch('/', bookingController.validateOne);
router.patch('/:id', bookingController.updateOne);
router.delete('/:id', bookingController.delete);

module.exports = router;

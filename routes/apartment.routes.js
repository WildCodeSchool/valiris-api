const apartmentsController = require('../controllers/apartment.controller.js');
const availabilitiesController = require('../controllers/availabilities.controller.js');
const router = require('express').Router();
const handleImageUpload = require('../middlewares/handleImageUpload.js');

router.get('/:id', apartmentsController.findOne);
router.get('/:id/back', apartmentsController.findOneBack);
router.get('/availabilities/all', availabilitiesController.findAll);
router.get('/:id/availabilities', availabilitiesController.findAllById);
router.get('/', apartmentsController.findAll);
router.post('/', handleImageUpload, apartmentsController.create);
router.patch('/:id', handleImageUpload, apartmentsController.update);
router.delete('/:id', apartmentsController.delete);

module.exports = router;

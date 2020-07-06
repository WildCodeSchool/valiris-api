const apartmentsController = require('../controllers/apartment.controller.js');
const availabilitiesController = require('../controllers/availabilities.controller.js');
const router = require('express').Router();
const handleImageUpload = require('../middlewares/handleImageUpload.js');

router.get('/:id', apartmentsController.findOne);
router.get('/:id/back', apartmentsController.findOneBack);
router.get('/:id/availabilities', availabilitiesController.findAll);
router.get('/', apartmentsController.findAll);
router.post('/', handleImageUpload, apartmentsController.create);
router.patch('/:id', handleImageUpload, apartmentsController.update);

module.exports = router;

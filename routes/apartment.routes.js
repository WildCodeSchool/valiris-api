const apartmentsController = require('../controllers/apartment.controller.js');
const availabilitiesController = require('../controllers/availabilities.controller.js');
const router = require('express').Router();
const handleImageUpload = require('../middlewares/handleImageUpload.js');

router.get('/:id', apartmentsController.findOne);
router.get('/:id/back', apartmentsController.findOneBack);
router.get('/', apartmentsController.findAll);
router.post('/', apartmentsController.create);
router.post('/upload', handleImageUpload, apartmentsController.upload);
router.patch('/:id', apartmentsController.update);
router.patch('/:id/updateSecondary', apartmentsController.updateSecondary);
router.post('/:id/updateNewSecondary', apartmentsController.updateNewSecondary);
router.delete('/:id', apartmentsController.delete);
router.delete('/secondary/:id', apartmentsController.deleteSecondary);

router.get('/:id/availabilities', availabilitiesController.findAllById);
router.get('/availabilities/all', availabilitiesController.findAll);

module.exports = router;
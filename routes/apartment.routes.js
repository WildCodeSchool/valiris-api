const apartmentsController = require('../controllers/apartment.controller.js');
const availabilitiesController = require('../controllers/availabilities.controller.js');
const router = require('express').Router();
const handleImageUpload = require('../middlewares/handleImageUpload.js');
const requireAuth = require('../middlewares/requireAuth.js');

router.get('/:id', apartmentsController.findOne);
router.get('/:id/back', requireAuth, apartmentsController.findOneBack);
router.get('/', apartmentsController.findAll);
router.post('/', requireAuth, apartmentsController.create);
router.post('/upload', requireAuth, handleImageUpload, apartmentsController.upload);
router.patch('/:id', requireAuth, apartmentsController.update);
router.patch('/:id/updateSecondary', requireAuth, apartmentsController.updateSecondary);
router.post('/:id/updateNewSecondary', requireAuth, apartmentsController.updateNewSecondary);
router.delete('/:id', requireAuth, apartmentsController.delete);
router.delete('/secondary/:id', requireAuth, apartmentsController.deleteSecondary);
router.get('/:id/availabilities', availabilitiesController.findAllById);
router.get('/availabilities/all', requireAuth, availabilitiesController.findAll);

module.exports = router;

const bookingController = require('../controllers/booking.controller.js');
const router = require('express').Router();
const requireAuth = require('../middlewares/requireAuth.js');

router.get('/', requireAuth, bookingController.findAll);
router.get('/:id', requireAuth, bookingController.findOne);
router.post('/', requireAuth, bookingController.create);
router.get('/requests/infos', bookingController.findAllInfos);
router.patch('/', requireAuth, bookingController.validateOne);
router.patch('/:id', requireAuth, bookingController.updateOne);
router.delete('/:id', requireAuth, bookingController.delete);

module.exports = router;

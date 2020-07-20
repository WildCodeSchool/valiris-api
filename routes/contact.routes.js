const contactController = require('../controllers/contact.controller.js');
const router = require('express').Router();
const requireAuth = require('../middlewares/requireAuth.js');

router.post('/', contactController.createForm);
router.post('/new', requireAuth, contactController.createContact);
router.get('/', requireAuth, contactController.findAll);
router.get('/:id', requireAuth, contactController.findOne);
router.patch('/:id', requireAuth, contactController.update);
router.delete('/:id', requireAuth, contactController.delete);

module.exports = router;

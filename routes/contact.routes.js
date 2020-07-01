const contactController = require('../controllers/contact.controller.js');
const router = require('express').Router();

router.post('/', contactController.createForm);
router.get('/', contactController.findAll);
router.get('/:id', contactController.findOne);
router.patch('/:id', contactController.update);
// router.delete('/:id', contactController.delete);

module.exports = router;

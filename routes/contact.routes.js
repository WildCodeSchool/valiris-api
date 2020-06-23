const contactController = require('../controllers/contact.controller.js');
const router = require('express').Router();

router.post('/', contactController.createForm);

module.exports = router;

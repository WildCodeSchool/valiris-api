const contactsController = require('../controllers/contact.controller.js');
const router = require('express').Router();

router.post('/', contactsController.create);

module.exports = router;

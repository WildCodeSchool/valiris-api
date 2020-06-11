const contactsController = require('../controllers/form.controller.js');
const router = require('express').Router();

router.post('/', contactsController.create);

module.exports = router;

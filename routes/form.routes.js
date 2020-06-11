const formController = require('../controllers/form.controller.js');
const router = require('express').Router();

router.post('/', formController.createContact);

module.exports = router;

const formController = require('../controllers/form.controller.js');
const router = require('express').Router();

router.post('/:lang', formController.createForm);

module.exports = router;

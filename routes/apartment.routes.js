const apartmentsController = require('../controllers/apartment.controller.js');
const router = require('express').Router();

router.get('/:id', apartmentsController.findOne);

module.exports = router;

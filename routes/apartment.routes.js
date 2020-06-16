const aparmentController = require('../controllers/apartment.controller.js');
const router = require('express').Router();

router.get('/', aparmentController.findAll);

module.exports = router;

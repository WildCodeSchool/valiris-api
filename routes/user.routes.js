const usersController = require('../controllers/user.controller.js');
const router = require('express').Router();

router.post('/', usersController.create);

module.exports = router;

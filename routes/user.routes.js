const usersController = require('../controllers/user.controller.js');
const router = require('express').Router();

router.post('/', usersController.create);
router.get('/:id', usersController.findOne);

module.exports = router;

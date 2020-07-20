const usersController = require('../controllers/user.controller.js');
const router = require('express').Router();


router.post('/', usersController.create);
router.get('/:id', usersController.findOne);
router.patch('/:id', usersController.update);
router.patch('/:id/password', usersController.updatePassword);

module.exports = router;

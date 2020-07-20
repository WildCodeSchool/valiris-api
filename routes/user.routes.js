const usersController = require('../controllers/user.controller.js');
const router = require('express').Router();
const requireAuth = require('../middlewares/requireAuth.js');

router.post('/', usersController.create);
router.get('/:id', requireAuth, usersController.findOne);
router.patch('/:id', requireAuth, usersController.update);
router.patch('/:id/password', requireAuth, usersController.updatePassword);

module.exports = router;

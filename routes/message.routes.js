const messagesController = require('../controllers/message.controller.js');
const router = require('express').Router();

router.post('/', messagesController.create);

module.exports = router;

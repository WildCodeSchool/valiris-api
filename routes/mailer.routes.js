const router = require('express').Router();
const mailer = require('../services/mailer.controller');

router.post('/', mailer.sendMail);

module.exports = router;

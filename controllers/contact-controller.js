const Contact = require('../models/contact.model.js');
const Joi = require('@hapi/joi');

const schema = Joi.object({
  lastname : Joi.string().pattern(/^[a-zA-Z]+$/).min(1).max(40).require(),
  firstname : Joi.string().pattern(/^[a-zA-Z]+$/).min(1).max(40).require(),
  email : Joi.string().email().require(),
  phone : Joi.string().alphanum(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).min(5).max(15)
})

class ContactController {
  static async create (req, res) {

  }
}
const User = require('../models/user.model.js');

class usersController {
  static async create (req, res) {
    const clientPayload = req.body;

    const isNotEmptyStirng = (str) => {
      return typeof str === 'string' && str.length > 0;
    };
    if (!isNotEmptyStirng(clientPayload.name) || !isNotEmptyStirng(clientPayload.email) || !isNotEmptyStirng(clientPayload.password)) {
      return res.status(422).send({ errorMessage: 'a required attribute is missing' });
    }
    const error = User.validate(clientPayload).error;
    if (error) {
      return res.status(422).send({ error: error.message });
    }

    const createdUser = await User.create(clientPayload.name, clientPayload.email, clientPayload.password);
    res.status(201).send(createdUser);
  }

  static async findOne (req, res) {
    try {
      const data = await User.findById(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `User with id ${req.params.id} not found.` });
      } else {
        console.log(err);
        res.status(500).send({ errorMessage: 'Error retrieving user account details with id ' + req.params.id });
      }
    }
  }
}

module.exports = usersController;

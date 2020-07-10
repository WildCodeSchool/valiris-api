const User = require('../models/user.model.js');

class usersController {
  static async create(req, res) {
    const userExists = await User.userAlreadyExists(req.body.email);
    if (userExists) {
      res.status(400).send({ errorMessage: 'Email already used' });
    } else {
      const clientPayloadInfos = { name: req.body.name, email: req.body.email };
      const clientPayloadPassword = { password: req.body.password };

      const isNotEmptyStirng = (str) => {
        return typeof str === 'string' && str.length > 0;
      };
      if (!isNotEmptyStirng(clientPayloadInfos.name) || !isNotEmptyStirng(clientPayloadInfos.email) || !isNotEmptyStirng(clientPayloadPassword.password)) {
        return res.status(422).send({ errorMessage: 'a required attribute is missing' });
      }

      const errorInfos = User.validateInfos(clientPayloadInfos).error;
      const errorPassword = User.validatePassword(clientPayloadPassword).error;
      if (errorInfos) {
        return res.status(422).send({ errorMessage: errorInfos.message, errorDetails: errorInfos.details });
      }
      if (errorPassword) {
        return res.status(422).send({ errorMessage: errorPassword.message, errorDetails: errorPassword.details });
      }

      const createdUser = await User.create(clientPayloadInfos.name, clientPayloadInfos.email, clientPayloadPassword.password);
      res.status(201).send(createdUser);
    }
  }

  static async findOne(req, res) {
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

  static async update(req, res) {
    const clientPayloadInfos = { name: req.body.name, email: req.body.email };

    const userExistsUpdate = await User.userAlreadyExistsUpdate(req.body.email);

    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    } else if (userExistsUpdate) {
      res.status(400).send({ errorMessage: 'Email already used' });
    } else {
      const errorInfos = User.validateInfos(clientPayloadInfos).error;
      if (errorInfos) {
        return res.status(422).send({ errorMessage: errorInfos.message, errorDetails: errorInfos.details });
      } else {
        try {
          const data = await User.updateById(req.params.id, req.body.name, req.body.email);
          res.status(200).send(data);
        } catch (err) {
          if (err.kind === 'not_found') {
            res.status(404).send({ errorMessage: `User with id ${req.params.id} not found.` });
          } else {
            console.log(err);
            res.status(500).send({ errorMessage: 'Error updating user with id ' + req.params.id });
          }
        }
      } 
    } 
  }

  static async updatePassword(req, res) {
    const clientPayloadPassword = { password: req.body.password };
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    } else {
      const errorPassword = User.validatePassword(clientPayloadPassword).error;
      if (errorPassword) {
        return res.status(422).send({ errorMessage: errorPassword.message, errorDetails: errorPassword.details });
      } else {
        try {
          const data = await User.updatePasswordById(req.params.id, req.body.password);
          res.status(200).send(data);
        } catch (err) {
          if (err.kind === 'not_found') {
            res.status(404).send({ errorMessage: `User with id ${req.params.id} not found.` });
          } else {
            console.log(err);
            res.status(500).send({ errorMessage: 'Error updating user with id ' + req.params.id });
          }
        }
      }
    }
  }
}

module.exports = usersController;

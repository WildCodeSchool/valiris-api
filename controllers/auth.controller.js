const User = require('../models/user.model.js');

class authController {
  static async login (req, res) {
    const clientPayload = req.body;
    try {
      const { token, data } = await User.login(clientPayload.email, clientPayload.password);
      res.status(200).send({ token, data });
    } catch (err) {
      if (err.message === 'user not found') {
        res.status(400).send({ message: 'L\'email renseigné n\'est pas valide.'});
      } else if (err.message === 'incorrect password') {
        res.status(400).send({ message: 'Le mot de passe n\'est pas valide.'});
      } else {
        res.status(400).send({message: 'Une erreur est survenue.'});
      }
    }
  }
}

module.exports = authController;

const User = require('../models/user.model.js');

class authController {
  static async login (req, res) {
    const clientPayload = req.body;
    try {
      const { token, data } = await User.login(clientPayload.email, clientPayload.password);
      res.status(200).send({ token, data });
    } catch (err) {
      res.status(400).send({ message: 'invalid credentials' });
    }
  }
}

module.exports = authController;

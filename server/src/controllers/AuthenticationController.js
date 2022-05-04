const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
  const tokenExpiryTime = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: tokenExpiryTime
  });
}

module.exports = {
  async signup(req, res) {
    try {
      const user = await User.create(req.body);

      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      });
    } catch (err) {
      res.status(400).send({
        error: "This email account is already in use"
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        res.status(401).send({
          error: "The login information was incorrect!"
        });
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        res.status(401).send({
          error: "The login information was incorrect!"
        });
      }

      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      });
    } catch (err) {
      res.status(500).send({
        error: "An error occoured while trying to login"
      });
    }
  },
  async getUserById(req, res) {
    try {
      const user = await User.findOne({
        where: { id: req.params.usersId }
      });
      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to get a user"
      });
    }
  },
  async putUserById(req, res) {
    try {
      const user = await User.update(req.body, {
        where: { id: req.params.usersId }
      });
      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to update a user"
      });
    }
  },
  async putPasswordById(req, res) {
    try {
      const user = await User.update(req.body, {
        where: { id: req.params.usersId }
      });

      res.send(user);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to update a user"
      });
    }
  }
};

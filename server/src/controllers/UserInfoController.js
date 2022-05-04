const { UserInfo } = require("../models");

module.exports = {
  async getUserInfoById(req, res) {
    try {
      const userInfo = await UserInfo.findOne({
        where: { userId: req.params.usersId }
      });
      res.send(userInfo);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occurred trying to get a use info"
      });
    }
  },
  async postUserInfoById(req, res) {
    try {
      const userInfo = await UserInfo.create({
        phoneau: req.body.phoneau,
        phoneth: req.body.phoneth,
        social: req.body.social,
        userId: req.params.usersId
      });
      res.send(userInfo);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occurred trying to post a use info"
      });
    }
  },
  async putUserInfoById(req, res) {
    try {
      const userInfo = await UserInfo.update(req.body, {
        where: { userId: req.params.usersId }
      });
      res.send(userInfo);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to update a use info"
      });
    }
  }
};

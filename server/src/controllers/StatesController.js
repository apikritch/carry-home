const { State } = require("../models"); //Sequelize Model for User

module.exports = {
  async getAllStates(req, res) {
    try {
      const state = await State.findAll();
      res.send(state);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to get all Instruction Guides"
      });
    }
  }
};

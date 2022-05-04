const { Province } = require("../models"); //Sequelize Model for User

module.exports = {
  //Routes
  //Gets All Instruction Guides from the database
  async getAllProvinces(req, res) {
    try {
      const province = await Province.findAll();
      res.send(province);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to get all Instruction Guides"
      });
    }
  }
};

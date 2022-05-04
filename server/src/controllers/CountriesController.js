const { Country } = require("../models"); //Sequelize Model for User

module.exports = {
  //Routes
  //Gets All Instruction Guides from the database
  async getAllCountries(req, res) {
    try {
      const country = await Country.findAll();
      res.send(country);
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to get all Instruction Guides"
      });
    }
  }
};

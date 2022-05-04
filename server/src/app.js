const express = require("express");
//Import Body-Parser
const bodyParser = require("body-parser");
//Import Cors
const cors = require("cors");
//Import Morgan
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config.js");

const app = express();
//Import Router Module

//To Support JSON-Encoded Bodies
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());
app.options('*', cors());

//Use Router
require("./routes/routes.js")(app);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || config.port);
  console.log(`Server started on port ${config.port}`);
});
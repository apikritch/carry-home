const Joi = require("@hapi/joi"); // Joi is used to validate user input

module.exports = {
  //Middleware - Joi Validation
  signup(req, res, next) {
    //Joi schema
    const schema = Joi.object({
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{8,32}$/)
        .required()
    });
    //Using Joi schema to validate user data
    const { error, value } = schema.validate(req.body);

    //If there is a error
    if (error) {
      //Switch statement checks what error occurred and send back a message to the user about the error
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "you must provided a valid email address"
          });
          break;
        case "password":
          res.status(400).send({
            error: `${error}The password failed to match the requirements:
                        <br>
                        1. It must contain ONLY the following characters: lowercase, uppercase, numbers
                        <br>
                        2. Must be between 8 and 32 characters
                        `
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registration information"
          });
      }
    } else {
      next();
    }
  }
};

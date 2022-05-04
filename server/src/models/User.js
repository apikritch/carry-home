const bcrypt = require("bcrypt");

async function hashPassword(user) {
  if (!user.changed("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashPasswordValue = await bcrypt.hash(user.password, salt);
  user.setDataValue("password", hashPasswordValue);
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fname: { type: DataTypes.STRING },
      lname: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING }
    },
    {
      hooks: { beforeSave: hashPassword }
    }
  );
  User.associate = function(models) {
    User.hasMany(models.Post, { as: post });
    User.hasOne(models.UserInfo, { as: userinfo });
  };

  User.prototype.comparePassword = async function(password) {
    try {
      const validPassword = await bcrypt.compare(password, this.password);
      return validPassword;
    } catch (error) {
      console.log("Wrong Password" + error);
    }
  };
  return User;
};

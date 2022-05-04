module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define(
    "UserInfo",
    {
      phoneau: { type: DataTypes.STRING },
      phoneth: { type: DataTypes.STRING },
      social: { type: DataTypes.STRING },
      userId: { type: DataTypes.INTEGER }
    },
    {}
  );
  UserInfo.associate = function(models) {
    UserInfo.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };
  return UserInfo;
};

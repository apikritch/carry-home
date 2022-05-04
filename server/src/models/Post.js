module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      depart: { type: DataTypes.DATE },
      address1au: { type: DataTypes.STRING },
      address2au: { type: DataTypes.STRING },
      suburb: { type: DataTypes.STRING },
      state: { type: DataTypes.STRING },
      postcodeau: { type: DataTypes.INTEGER },
      addressth: { type: DataTypes.STRING },
      province: { type: DataTypes.STRING },
      postcodeth: { type: DataTypes.INTEGER },
      pickup: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER },
      postopt: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
      userId: { type: DataTypes.INTEGER }
    },
    {}
  );
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };
  return Post;
};

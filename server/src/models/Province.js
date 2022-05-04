module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define(
    "Province",

    {
      name: { type: DataTypes.STRING }
    }
  );
  return Province;
};

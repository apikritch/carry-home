module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "State",

    {
      name: { type: DataTypes.STRING }
    }
  );
  return State;
};

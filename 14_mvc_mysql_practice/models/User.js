const UserModel = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      userid: { type: DataTypes.STRING(20), allowNull: false },
      name: { type: DataTypes.STRING(10), allowNull: false },
      pw: { type: DataTypes.STRING(20), allowNull: false },
    },
    { timestamps: false, freezeTableName: true }
  );
  return user;
};

module.exports = UserModel;

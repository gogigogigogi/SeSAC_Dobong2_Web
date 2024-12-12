const User = (Sequelize, DataType) => {
  const model = Sequelize.define(
    "user",
    {
      userId: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      loginId: {
        type: DataType.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataType.STRING(10),
        allowNull: false,
      },
      nickname: {
        type: DataType.STRING(10),
        allowNull: false,
      },
    },
    { timestamps: true, freezeTableName: true }
  );
  return model;
};

module.exports = User;

const Image = (Sequelize, DataType) => {
  const model = Sequelize.define(
    "image",
    {
      imageId: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      data: {
        type: DataType.STRING(50),
      },
    },
    { timestamps: true, freezeTableName: true }
  );

  return model;
};

module.exports = Image;

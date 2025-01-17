const ProfileModel = (sequelize, DataTypes) => {
  const profile = sequelize.define(
    "profile",
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      salary: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      freezeTableName: true,
    }
  );
  return profile;
};

module.exports = ProfileModel;

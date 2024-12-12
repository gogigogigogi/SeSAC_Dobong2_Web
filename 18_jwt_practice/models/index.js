"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["development"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const UserModel = require("./user")(sequelize, Sequelize);
const ImageModel = require("./image")(sequelize, Sequelize);

UserModel.hasOne(ImageModel, {
  foreignKey: "userId",
});
ImageModel.belongsTo(UserModel, {
  foreignKey: "userId",
});

db.User = UserModel;
db.Image = ImageModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

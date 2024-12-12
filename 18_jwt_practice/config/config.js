const dotenv = require("dotenv");
dotenv.config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

const dbUserInfo = [
  {
    id: "osh",
    pw: "1234",
    nickname: "소고기",
  },
];

module.exports = { development };

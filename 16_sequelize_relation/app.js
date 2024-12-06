const express = require("express");
const app = express();
const { sequelize } = require("./models");
const PORT = 8080;
const indexRouter = require("./routes");

// middleware 설정
app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// router 설정
app.use("/", indexRouter);
// sync 설정
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("db connection success!");
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection Err!");
    console.error(err);
  });

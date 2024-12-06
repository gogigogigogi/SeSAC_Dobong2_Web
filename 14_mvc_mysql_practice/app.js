const express = require("express");
const db = require("./models/index");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const userRouter = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
app.use("/user", userRouter);

// TODO: 404 에러 처리
app.use("*", (req, res) => {
  res.render("404.ejs");
});

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/user`);
    });
  })
  .catch((err) => {
    console.log("서버 동작 실패");
    console.error(err);
  });

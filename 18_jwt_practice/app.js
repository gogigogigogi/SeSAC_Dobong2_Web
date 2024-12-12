const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const mainRouter = require("./routes/main");
const userRouter = require("./routes/user");
const db = require("./models");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.set("view engine", "ejs");
// "/"" 루트 기준은 운영체제 파일 시스템 루트
// "./" 현재 작업 디렉토리 기준 (서버가 실행된 폴더 기준)
app.set("views", __dirname + "/views");

app.use(
  session({
    secret: "secret secret key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 2,
    },
  })
);
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", mainRouter);
app.use("/user", userRouter);

db.sequelize.sync({ force: false }).then((result) => {
  console.log("db 연결 성공");
  app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
  });
});

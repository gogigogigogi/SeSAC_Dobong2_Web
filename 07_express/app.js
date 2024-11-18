const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정 추가
// 뷰엔진 설정
app.set("view engine", "ejs");

app.set("views", "./views");
app.use("/static", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  console.log(req);
  // res.send("hello express!!!");
  res.render("test", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추움",
    },
  });
});

// get /login
app.get("/login", function (req, res) {
  res.render("login", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추움",
    },
  });
});

// get /register
app.get("/register", function (req, res) {
  res.render("register", {
    isLogin: true,
    userInfo: {
      name: "allie",
      msg: "오늘 너무 추움",
    },
  });
});

app.use(function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

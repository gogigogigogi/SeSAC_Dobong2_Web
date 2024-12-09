const express = require("express");
const app = express();
const PORT = 8080;
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(__dirname + "/static"));
app.use(
  session({
    secret: "secret Key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 10,
    },
  })
);

app.use("*", (req, res, next) => {
  console.log("매 요청때 생성 req.session", req.session);
  console.log("매 요청때 생성 req.sessionID", req.sessionID);
  next();
});

// 세션 설정, 10분 뒤 세션 종료하도록 설정
app.get("/", (req, res) => {
  // 로그인이 안된 유저 >> {isLogin : false}
  // 로그인이 된 유저 >> {isLogin : true, user:user}
  if (req.session.user) {
    res.render("index", { isLogin: true, user: req.session.user.userId });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

// POST /login
// 실제 로그인 진행
// 세션을 생성하고 실제 로그인하는 것
// 세션의 user라는 키를 추가하여 userId값을 value로 전달
app.post("/login", (req, res) => {
  const { id, pw } = req.body;
  if (userInfo.userId === id && userInfo.userPw === pw) {
    req.session.user = { userId: req.body.id };
    console.log("로그인 성공시 저장 session", req.session);
    console.log("로그인 성공시 저장 sessionID", req.sessionID);
    res.redirect("/");
  } else {
    res.render("login");
  }
});

// POST /logout
// 실제 로그아웃 진행
// 세션 삭제하고 실제 로그아웃하는 것
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

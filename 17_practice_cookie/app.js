const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: 쿠키 미들웨어 설정
// 암호화 하지 않은 쿠키
app.use(cookieParser("secret Key"));
const cookieConfig = {
  maxAge: 1000 * 60 * 60 * 24,
  httpOnly: true,
  signed: true,
};

app.get("/", (req, res) => {
  // TODO : 쿠키값 가져오기 및 index.ejs에 보내기
  // const popup = req.cookies.popup === "true";
  const popup = req.signedCookies.popup || true;
  res.render("index", { popup: popup });
});

app.post("/set-cookie", (req, res) => {
  // TODO : 쿠키 생성하기
  // const popup = !req.body.isChecked;
  res.cookie("popup", !req.body.isChecked, cookieConfig);
  res.send("쿠키 생성 성공!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 8080;
const cookieParser = require("cookie-parser");

// ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser());

// ver2. 암호화 된 쿠키
app.use(cookieParser("secret Key")); // 임의의 비밀키를 문자열로 넣어준다.
// 실제로 암호화 쿠키를 사용한다면 비밀키도 .env로 관리하는 것이 좋다. 문자열은 아무거나 상관 없음

app.set("view engine", "ejs");

// cookie 설정
const cookieConfig = {
  // maxAge : 쿠키의 수명, 1000이 1초인 밀리초 단위 ex) 1000 * 60 * 5
  // expires : 만료날짜 GMT시간 설정 ex) new Date(2024,11,9)
  // httpOnly : 프론트에서 document.cookie 로 접근하는것을 차단, http 통신으로만 처리할 수 있게 한다. (true / false)
  // path : "/", "/abc" 등 특정 url에 한하여 쿠키 설정
  // secure : 웹 브라우저와 웹서버가 https로 통신할 경우에만 쿠키 전송 (true / false)
  // signed : 쿠키 암호화 여부 설정 (true / false)
  maxAge: 10 * 60 * 1000, // 수명 1분
  httpOnly: true, // 프론트에서 쿠키 접근 막기
  // signed: false, // 암호화 여부
  signed: true, // 암호화 여부
};

const cookieConfig2 = {
  maxAge: 10 * 60 * 1000,
  httpOnly: true,
  path: "/abc",
};

app.get("/abc", (req, res) => {
  res.cookie("abc-page", "abc page cookie", cookieConfig2);
  res.render("cookie-another");
});

app.get("/", (req, res) => {
  res.render("cookie");
});

app.get("/setCookie", (req, res) => {
  // res.cookie(쿠키이름, 쿠키값, 쿠키옵션)
  res.cookie("myCookie", "cookie!!!!", cookieConfig);
  // 암호화된 쿠키 / 암호화되지 않은 쿠기
  // 모두 res.cookie()로 쿠키 설정
  res.send("set cookie 완료, 응답 종료!");
});

app.get("/getCookie", (req, res) => {
  console.log(req.cookies); // {쿠키 : 쿠키값, ...}
  console.log("암호화된 쿠기", req.signedCookies);
  // res.send(req.cookies); // ver1. 암호화 되지 않은 쿠키
  res.send(req.signedCookies); // ver2. 암호화된 쿠키
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "cookie!!!!", cookieConfig);
  res.send("clear cookie, 응답 종료");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* 
ver1. 암호화하지 않았을 떄
- 미들웨어에서 >> app.use(cookieParser())
- 쿠키 설정에서 >> res.cookie(쿠키이름, 쿠키값, 쿠키옵션객체)
- 쿠키 확인에서 >> req.cookies 객체에서 확인
- 쿠키 삭제에서 >> res.clearCookie()
  - 삭제할때는 쿠키이름, 쿠키값, 쿠키설정이 전부 일치해야지만 삭제처리된다.
- clearCookie(), cookie()는 응답완료를 하지 않기 때문에 이후에 render, send, redirect, end.. 등으로 응답완료 작업을 해줘야 한다.

ver2. 암호화했을 떄
- 미들웨어에서 >> app.use(cookieParser("임의의 문자열인 비밀키"))
- 쿠키 설정에서 >> ver1. 과 동일
  - 쿠키 옵션객체의 signed 값이 true 여야 한다
- 쿠키 확인에서 >> req.signedCookies 객체에서 확인
- 쿠키 삭제에서 >> ver1. 과 동일
*/

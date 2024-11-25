const express = require("express");
const app = express();
const PORT = 8080;

const realId = "banana";
const realPw = "4321";
/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* API */
app.get("/", (req, res) => {
  res.render("index");
});

// /ajax GET
app.get("/ajax", (req, res) => {
  res.send(req.query);
  // res.render("index");
});

// /ajax POST
app.post("/ajax", (req, res) => {
  // body-parser 설정을 해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
  // res.render("index");
});

// /axios GET
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
  // res.render("index");
});

// /axios POST
app.post("/axios", (req, res) => {
  // body-parser 설정을 해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
  // res.render("index");
});

// /fetch GET
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // res.send("응답완료");
  res.send(req.query);
  // res.render("index");
});

// /fetch POST
app.post("/fetch", (req, res) => {
  // body-parser 설정을 해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
  // res.render("index");
});

// 외부 api 사용하기
app.get("/api", (req, res) => {
  res.render("api");
});

// 실습1
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});
// 실습1 - get 요청, 응답
app.get("/practice1-axios-get", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 실습2
app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});
// 실습2 - post 요청, 응답

// practice2 POST
app.post("/practice2", (req, res) => {
  console.log(req.body);
  const { userId, userPw } = req.body;
  if (userId === realId && userPw === realPw) {
    res.send({ isSuccess: true, userInfo: userId });
  } else {
    res.send({ isSuccess: false });
  }
});

// app.post("/practice2-axios-post", (req, res) => {
//   console.log(req.body);
//   const { userId, userPw } = req.body;
//   if (userId === realId && userPw === realPw) {
//     res.send({ isSuccess: true, userInfo: userId });
//   } else {
//     res.send({ isSuccess: false });
//   }
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// const express = require("express");
// const app = express();
// const PORT = 8080;

// // 미들웨어 설정
// // 1. 뷰 폴더 설정
// app.use("view engine", "ejs");
// app.use("views", "./views");

// // 2. body-parser
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // api
// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

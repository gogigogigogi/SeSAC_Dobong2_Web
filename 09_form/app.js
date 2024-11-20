const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); // 뷰파일 폴더 경로 설정

// 정적 파일 관리
// app.use("/static", express.static(__dirname + "/public"));

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 요청 > 응답 */
app.get("/", function (req, res) {
  console.log("nodemon 실행!!!");
  res.render("index");
});

// form get요청
app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("form data get 요청 성공!");
  res.render("result.ejs", {
    userInfo: req.query,
    title: "GET",
  });
});

// form post요청
app.post("/postForm", function (req, res) {
  console.log("post 요청 바디는", req.body);

  // res.send("form data post 요청 성공!");
  res.render("result.ejs", {
    userInfo: req.body,
    title: "POST",
  });
});

// form validation post 요청
app.post("/js-form-check", function (req, res) {
  console.log("post 요청 바디는", req.body);

  // res.send("form data post 요청 성공!");
  console.log(req.body);
  res.send("js 유효성 검사");
});

app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});

app.get("/practice_result/get", (req, res) => {
  res.render("practice/practice_result", {
    userInfo: {
      name: req.query.name,
      gender: req.query.gender,
      date: [req.query.year, req.query.month, req.query.day],
      hobby: req.query.hobby,
      method: "get",
    },
  });
});
// 4. 주소 지정 form post 요청
app.post("/practice_result/post", (req, res) => {
  res.render("practice/practice_result", {
    userInfo: {
      name: req.body.name,
      gender: req.body.gender,
      date: [req.body.year, req.body.month, req.body.day],
      hobby: req.body.hobby,
      color: req.body.color,
      number: req.body.number,
      method: "post",
    },
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

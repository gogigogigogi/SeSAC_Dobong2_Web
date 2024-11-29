const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("/ 접속");
  res.render("index.ejs");
});

app.get("/comments", (req, res) => {
  console.log("/comments 접속");
  res.render("comments.ejs", { comments: comments });
});

// url 뒤에 붙는 값을 req.params로 읽어올 수 있다
// :뒤에 붙는 이름으로 값이 저장된다.
app.get("/comment/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const commentId = req.params.id;

  if (commentId < 1 || commentId > comments.length) {
    res.render("404.ejs");
  }
  if (isNaN(commentId)) {
    res.render("404.ejs");
  }
  res.render("comment.ejs", { commentInfo: comments[commentId - 1] });
});

// [404 error]
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404.ejs");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

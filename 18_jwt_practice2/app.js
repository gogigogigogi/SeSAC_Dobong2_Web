const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = 8080;
const SECRET = "B8ZPm1BqtrGH1f";
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userInfo = {
  id: "aaa",
  pw: "bbb",
  name: "ccc",
  age: 10,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { id, pw } = req.body;
  const { id: realId, pw: realPw } = userInfo;
  console.log(id === realId, pw === realPw);
  if (id === realId && pw === realPw) {
    console.log("테스트1");
    const token = jwt.sign({ id: userInfo }, SECRET);
    console.log("token", token);
    res.send({ result: true, token });
  } else {
    console.log("테스트2");
    res.send({ result: false, message: "로그인 실패" });
  }
});

app.post("/token", (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const auth = jwt.verify(token, SECRET);
    console.log("auth", auth);
    try {
      if (auth.id.id === userInfo.id) {
        res.send({ result: true, name: userInfo.name });
      }
    } catch (err) {
      console.log("토큰 인증 에러");
      res
        .status(401)
        .send({ result: false, message: "인증된 회원이 아닙니다." });
    }
  } else {
    res.redirect("/login");
  }
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});

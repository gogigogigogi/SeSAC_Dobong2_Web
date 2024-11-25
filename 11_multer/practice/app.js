const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. view engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. static 폴더 설정
app.use("/static", express.static(`${__dirname}/public`));
app.use("/uploads", express.static(`${__dirname}/uploads`));

// 4. multer 설정
const upload = multer({
  dest: "uploads/", // 어디에 저장될지!
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      console.log("파일원래이름은", file.originalname);
      const extension = path.extname(file.originalname);
      done(null, `${req.body.name}${extension}`);
    },
  }),
});

app.get("/", (req, res) => {
  console.log("/ get 요청 수신");
  res.render("index.ejs");
});

app.post("/signup", uploadDetail.single("profileImg"), (req, res) => {
  console.log("id은", req.body.id);
  console.log("pw은", req.body.pw);
  console.log("name은", req.body.name);
  console.log("age은", req.body.age);
  console.log("file은", req.file);
  console.log("업로드 완료!");
  const userInfo = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
    file: req.file,
  };
  // res.send({
  //   id: req.body.id,
  //   pw: req.body.pw,
  //   name: req.body.name,
  //   age: req.body.age,
  //   file: req.file,
  // });
  res.render("my_page.ejs", { userInfo });
});

// app.post("/dynamicUpload", uploadDetail.array("dynamicFile"), (req, res) => {
//   console.log("file1은", req.files[0]);
//   console.log(" dynamicUpload업로드 완료!");
//   res.send(req.files[0]);
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

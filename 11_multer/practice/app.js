const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static(`${__dirname}/public`));
app.use("/uploads", express.static(`${__dirname}/uploads`));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);

      done(null, req.body.id + Date.now() + extension);

      // const basename = path.basename(file.originalname, extension);
      // done(null, `${basename}${Date.now()}${extension}`);
      // console.log("사진 업로드 완료");
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/my-page", uploadDetail.single("profileImg"), (req, res) => {
  const userInfo = {
    ...req.body,
    src: req.file.path,
  };

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

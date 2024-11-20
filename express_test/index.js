const express = require("express");

const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("요청은", req);
  // res.send("<h1>안녕</h1>");
  res.render("page", { name: "osh" });
});

app.use((req, res, next) => {
  console.log("미들");
  next();
});

app.use((req, res) => {
  res.send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

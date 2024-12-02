const express = require("express");
const app = express();
const PORT = 8080;
const mainRouter = require("./routes/index");
const loginRouter = require("./routes/login");

app.set("view engine", "ejs");
app.set("views", "./views");

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", mainRouter);
app.use("/login", loginRouter);

app.get("*", (req, res) => {
  res.render("404.ejs");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

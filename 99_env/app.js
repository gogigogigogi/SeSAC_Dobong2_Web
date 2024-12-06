const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

console.log("db pw", process.env);

app.get("/", (req, res) => {
  res.send("get 요청");
});
app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// console.log(process.env);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const User = require("../model/User");

// GET /user
exports.getUser = (req, res) => {
  console.log(User.userInfo()); // {}
  res.render("user.ejs", { userInfo: User.userInfo() });
};

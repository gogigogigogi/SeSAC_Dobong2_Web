// TODO: 컨트롤러 코드
const User = require("../model/User");
const models = require("../models/index");

exports.main = (req, res) => {
  res.render("index.ejs");
};
exports.getSignUp = (req, res) => {
  res.render("signup.ejs");
};
exports.getSignIn = (req, res) => {
  res.render("signin.ejs");
};

exports.postSignUp = (req, res) => {
  // 시퀄라이즈 전
  // User.postSignUp(req.body, () => {
  //   console.log("post /signup 쿼리 이후 실행완료");
  //   res.send("response");
  // });

  //시퀄라이즈 후
  models.user
    .create({
      userid: req.body.userId,
      name: req.body.name,
      pw: req.body.pw,
    })
    .then((result) => {
      res.send("response");
    })
    .catch((err) => {
      console.error("err", err);
      res.status(500).send("server err");
    });
};

exports.postSignIn = (req, res) => {
  // 시퀄라이즈 전
  // User.postSignIn(req.body, (result) => {
  //   res.send(result);
  // });

  // 시퀄라이즈 후
  models.user
    .findOne({
      where: { userid: req.body.loginId },
      attributes: ["userid", "name", "pw"],
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error("err", err);
      res.status(500).send("server err");
    });
};

exports.postProfile = (req, res) => {
  // 시퀄라이즈 전
  // User.postProfile(req.body.userid, (result) => {
  //   res.render("profile.ejs", { userInfo: result });
  // });
  console.log(req.body);

  // 시퀄라이즈 후
  models.user
    .findOne({
      where: { userid: req.body.userid },
      attributes: ["userid", "name", "pw"],
    })
    .then((result) => {
      res.render("profile.ejs", { userInfo: result });
    })
    .catch((err) => {
      console.error("err", err);
      res.status(500).send("server err");
    });
};

exports.editProfile = (req, res) => {
  // 시퀄라이즈 전
  // User.editProfile(req.body, () => {
  //   res.send("response");
  // });

  // 시퀄라이즈 후
  models.user
    .update(
      {
        userid: req.body.userInfo.id,
        name: req.body.userInfo.name,
        pw: req.body.userInfo.pw,
      },
      { where: { userid: req.body.userInfo.id } }
    )
    .then((result) => {
      res.send("response");
    })
    .catch((err) => {
      console.error("err", err);
      res.status(500).send("server err");
    });
};

exports.deleteProfile = (req, res) => {
  // 시퀄라이즈 전
  // User.deleteProfile(req.body.userId, () => {
  //   res.send("삭제 완료");
  // });

  console.log("req.body", req.body);
  // 시퀄라이즈 후
  models.user
    .destroy({ where: { userid: req.body.userId } })
    .then((result) => {
      res.send("response");
    })
    .catch((err) => {
      console.error("err", err);
      res.status(500).send("server err");
    });
};

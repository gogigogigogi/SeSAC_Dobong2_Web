const db = require("../models");

exports.renderMainPage = (req, res) => {
  try {
    if (req.session.user) {
      db.User.findOne({
        where: {
          loginId: req.session.user.id,
        },
        include: [{ model: db.Image, attributes: ["data"] }],
      })
        .then((result) => {
          console.log("유저 조회 결과", result);
          console.log("이미지 조회 결과", result.image.data);
          if (result.dataValues) {
            res.render("index", {
              isLogin: true,
              userInfo: {
                userNickname: result.dataValues.nickname,
                data: result.image.data,
              },
            });
          } else {
            res.send({ result: false });
          }
        })
        .catch((err) => {
          console.log("err", err);
          res.status(500).send("server error");
        });
    } else {
      res.render("index", { isLogin: false });
    }
  } catch (err) {}
};

const db = require("../models/index");
const dbUserInfo = require("../models/index");

exports.renderLoginPage = (req, res) => {
  if (req.session.user) {
    res.send(`<script>
      alert("이미 로그인 된 유저입니다");
      document.location.href = "/"
      </script>
      `);
  } else {
    res.render("login");
  }
};

exports.renderSignupPage = (req, res) => {
  res.render("signup");
};

exports.loginUser = (req, res) => {
  const { id: inputId, pw: inputPw } = req.body;
  console.log("서버측", inputId, inputPw);

  db.User.findOne({
    where: {
      loginId: inputId,
      pw: inputPw,
    },
  })
    .then((result) => {
      console.log("유저 조회 결과", result);
      if (result) {
        req.session.user = {
          id: result.dataValues.loginId,
          nickname: result.dataValues.nickname,
        };
        res.status(200).send({
          result: true,
          userNickname: result.dataValues.nickname,
        });
      } else {
        res.send({ result: false });
      }
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send("server error");
    });
};

exports.logoutUser = (req, res) => {
  console.log("로그아웃 서버");
  try {
    console.log(req.session);
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) {
          throw err;
        }
        res.clearCookie("connect.sid");
        res.send();
      });
    } else {
      res.status(401).send();
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("서버 에러");
  }
};

exports.createUser = async (req, res) => {
  console.log(req.session);
  console.log(req.body);
  console.log(req.file);
  const newUser = {
    id: req.body.id,
    pw: req.body.pw,
    nickname: req.body.nickname,
  };

  try {
    await db.sequelize.transaction(async (t) => {
      const UserResult = await db.User.create(
        {
          loginId: req.body.id,
          pw: req.body.pw,
          nickname: req.body.nickname,
        },
        { transaction: t }
      );
      console.log("유저 생성 결과", UserResult);
      console.log("파일 쪽 정보", req.file);
      const ImageResult = await db.Image.create(
        {
          userId: UserResult.dataValues.userId,
          data: req.file.path,
        },
        { transaction: t }
      );
      console.log("이미지 생성 결과", ImageResult);

      res.status(200).send("회원가입 성공");
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("서버 에러 발생");
  }
};

// exports.createUser = (req, res) => {
//   console.log(req.session);
//   console.log(req.body);
//   console.log(req.file);
//   const newUser = {
//     id: req.body.id,
//     pw: req.body.pw,
//     nickname: req.body.nickname,
//   };
//   db.User.create({
//     loginId: req.body.id,
//     pw: req.body.pw,
//     nickname: req.body.nickname,
//   })
//     .then((result) => {
//       console.log("유저 생성 결과", result);
//       res.status(200).send("회원가입 성공");
//     })
//     .catch((err) => {
//       console.log("err", err);
//       res.status(500).send("server error");
//     });
// };

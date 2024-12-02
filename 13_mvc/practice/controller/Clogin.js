const userInfo = require("../model/User");

exports.login = (req, res) => {
  // 실습1
  // const { id: realId, pw: realPw } = userInfo.userInfo();
  // const { id, pw } = req.body;
  // if (realId === id && realPw === pw) {
  //   res.send({ isSuccess: true, id: realId });
  // } else {
  //   res.send({ isSuccess: false });
  // }

  // 실습2
  let userInfosStr = userInfo.userInfo();
  // const userInfosArr = userInfosStr
  //   .split("\n")
  //   .map((el) => el.split("//"))
  //   .map((el) => {
  //     return {
  //       id: el[0],
  //       pw: el[1],
  //       name: el[2],
  //     };
  //   });

  const userInfosArr = userInfosStr.split("\n").map((el) => {
    const user = el.split("//");
    return {
      id: user[0],
      pw: user[1],
      name: user[2],
    };
  });

  const { id, pw } = req.body;
  const realUser = userInfosArr.find((el) => {
    return el.id === id && el.pw === pw;
  });
  if (realUser) {
    res.send({ isSuccess: true, id: realUser.id });
  } else {
    res.send({ isSuccess: false });
  }
};

// TODO: DB(mysql) 연결
const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "9748",
  database: "sesac",
});

// TODO: 모델 코드
exports.postSignUp = (userInfo, cb) => {
  conn.query(
    `INSERT INTO user VALUE(null, "${userInfo.userId}", "${userInfo.name}", "${userInfo.pw}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("postSignUp 쿼리 응답", rows);
      cb();
    }
  );
};

exports.postSignIn = (userInfo, cb) => {
  conn.query(
    `SELECT userid, name, pw FROM user WHERE userid="${userInfo.loginId}" AND pw="${userInfo.loginPw}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      cb(rows[0]);
    }
  );
};

exports.postProfile = (userId, cb) => {
  conn.query(
    `SELECT userid, name, pw FROM user WHERE userid="${userId}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      cb(rows[0]);
    }
  );
};

exports.editProfile = (userInfo, cb) => {
  conn.query(
    `UPDATE user SET userid="${userInfo.userInfo.id}", name="${userInfo.userInfo.name}", pw="${userInfo.pw}" WHERE userid="${userInfo.userInfo.id}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      cb();
    }
  );
};

exports.deleteProfile = (userId, cb) => {
  conn.query(`DELETE FROM user WHERE userid="${userId}"`, (err, rows) => {
    if (err) {
      throw err;
    }
    cb();
  });
};

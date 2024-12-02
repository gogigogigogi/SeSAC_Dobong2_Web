const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "9748",
  database: "sesac",
});

exports.getVisitors = (cb) => {
  //   // [DB 연결 전]
  //   // return [
  //   //   { id: 1, name: "홍길동", comment: "내가 왔다" },
  //   //   { id: 2, name: "이찬혁", comment: "으라차차" },
  //   // ];

  // [DB 연결 후]
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;
    console.log("쿼리 결과:", rows);
    cb(rows);
  });
};

// conn.connect((err) => {
//   if (err) {
//     console.error("데이터베이스 연결 실패:", err);
//     return;
//   }
//   console.log("데이터베이스에 성공적으로 연결되었습니다.");
// });

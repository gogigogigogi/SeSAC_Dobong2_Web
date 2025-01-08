const bcrypt = require("bcrypt");

const saltRounds = 10;

function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

// 비밀번호 일치 여부 확인
function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw); // true, false 반환
}

const originalPw = "1234";
const hashedPw = hashPw(originalPw);
console.log("암호화된 비밀번호", hashedPw);
console.log(hashPw);

// 비밀번호 확인
const isMatch = comparePw("1234", hashedPw);
const isMatch2 = comparePw("12345", hashedPw);
console.log(isMatch);
console.log(isMatch2);
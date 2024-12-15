const crypto = require("crypto");

// const createHashedPassword = (password) => {
//   return crypto.createHash("sha512").update(password).digest("base64");
// };
// const mypw = "123124123";
// const hashedPw = createHashedPassword(mypw);
// const db_pw = hashedPw;
// console.log(hashedPw);
// console.log(hashedPw);
// console.log(hashedPw);
// console.log(hashedPw);
// console.log(hashedPw);

// const inputPw = "1231241231";

// const verifyPassword = (inputPw, db_pw) => {
//   const compare = crypto.createHash("sha512").update(inputPw).digest("base64");
//   return compare === db_pw;
// };

// console.log("비교결과는", verifyPassword(inputPw, db_pw));

const createHashWithSalt = (password) => {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keyLen = 64;
  const algorithm = "sha512";
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keyLen, algorithm)
    .toString("base64");
  return { hash, salt };
};

const { hash, salt } = createHashWithSalt("qweasdzxc");
const db_info = {
  db_hash: hash,
  db_salt: salt,
};
console.log(db_info);

const checkPw = (inputPw, savedPw, savedSalt) => {
  const iterations = 100;
  const keyLen = 64;
  const algorithm = "sha512";
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keyLen, algorithm)
    .toString("base64");
  return savedPw === hash;
};

console.log(checkPw("qweasdzxc", db_info.db_hash, db_info.db_salt));

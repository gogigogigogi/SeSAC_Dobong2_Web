// JSON
// JavaScript Object Notation

/**
 *
 * {
 *  "name" : 'allie',
 *  married : false,
 *  family : {father : 'ddd', mother : 'ddd'}
 * }
 */

const car = `{
  "model":"아이오닉6",
  "company":"현대",
  "price":50000000,
  "year" : 2023,
  "isElectric" : "true",
  "option" : ["slide mirror", "smart sensor"]
}`;

console.log(typeof car);

// JSON.parse()로 JSON을 js object로 변환
const obj = JSON.parse(car);
console.log(obj);
console.log(typeof obj);

// JSON.stringify()로 js object을 JSON로 변환
const carJson = JSON.stringify(obj);
console.log(carJson);

// stringify()의 세번째 인자: 들여쓰기할 공백의 크기
const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);

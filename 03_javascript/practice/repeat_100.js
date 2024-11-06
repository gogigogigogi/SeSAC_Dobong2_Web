// let arr = [];

// for (let i = 1; i < 101; i++) {
//   arr.push(i);
// }
// console.log("배열 ", arr);

// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum1 += arr[i];
// }
// console.log("sum1 ", sum1);

// let sum2 = 0;
// for (let num of arr) {
//   sum2 += num;
// }
// console.log("sum2 ", sum2);

// let sum3 = 0;
// arr.forEach((num) => {
//   sum3 += num;
// });
// console.log("sum3 ", sum3);

//===========

// let fruits1 = [
//   "사과",
//   "딸기",
//   "파인애플",
//   "수박",
//   "참외",
//   "오렌지",
//   "자두",
//   "망고",
// ];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// let same = [];
// for (let i = 0; i < fruits2.length; i++) {
//   if (fruits1.includes(fruits2[i])) {
//     same.push(fruits2[i]);
//   }
// }
// console.log(same);

// let diff = [];
// for (let i = 0; i < fruits1.length; i++) {
//   if (!fruits2.includes(fruits1[i])) {
//     diff.push(fruits1[i]);
//   }
// }
// console.log(diff);

//===========

// let today = new Date().getDay();

// switch (today) {
//   case 0:
//     console.log("주말");
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("평일");
//     break;
//   case 6:
//     console.log("주말");
//     break;
// }

//===========
//0~10
// 0 ~ 11
// 0 ~ 9

// let randomNumber = Math.floor(Math.random() * 11);
// console.log(randomNumber);

//0~1
//0~<10
// let randomNumber = Math.round(Math.random() * 10);
// console.log(randomNumber);

//랜덤생성 숫자 전체 확인하기
// let arr = [];
// for (let i = 0; i < 500; i++) {
//   let randomNumber = Math.round(Math.random() * 10);
//   arr.push(randomNumber);
// }
// console.log(arr);

//5~13사이 랜덤한 정수

//0<= < x <1
//0<= < x <8
//
// let randomNumber = Math.random() * 8;
// console.log(randomNumber);

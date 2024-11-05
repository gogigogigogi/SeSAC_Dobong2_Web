/**
 * for문
 *
 */

for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}

for (let i = 0; i < 10; i += 3) {
  console.log(`안녕 ${i}`);
}

for (let i = 0; i < 5; i++) {
  console.log(`안녕 ${i + 1}`);
}

for (let i = 5; i > 0; i--) {
  console.log(`안녕 ${i}`);
}

let fruits = ["apple", "banana", "orange", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 1~n까지 더하기

let n = 11;

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log(sum);

let arr = [99, 98, 85, 77, 100, 50];
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
  sum2 += arr[i];
}
console.log(sum2);

let sum3 = 0;
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    sum3 += i;
  }
}

let sum4 = 0;
for (let i = 0; i <= 20; i += 2) {
  sum4 += i;
}

console.log(sum3, sum4);

let promptAge = Number(prompt("나이를 입력하세요"));

if (promptAge >= 20) {
  console.log("성인");
} else if (promptAge >= 17) {
  console.log("고등학생");
} else if (promptAge >= 14) {
  console.log("중학생");
} else if (promptAge >= 8) {
  console.log("초등학생");
} else if (promptAge >= 0) {
  console.log("유아");
} else {
  console.log("0 이상 입력하세요.");
}

let now = new Date().getHours();
let time = now >= 12 ? "오후" : "오전";

console.log(time);

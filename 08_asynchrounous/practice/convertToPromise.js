function callPromise(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(name);
      res(name); // cb 대신 resolve로 값 넘기기
    }, 1000);
  });
}

function backPromise(txt) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(txt);
      res(txt);
    }, 1000);
  });
}

function hellPromise(msg) {
  return new Promise((res, req) => {
    setTimeout(() => {
      res(msg);
    }, 1000);
  });
}

// then 과 catch를 이용

// callPromise("kim")
//   .then((name) => {
//     console.log(name + "반가워");
//     return backPromise("back");
//   })
//   .then((txt) => {
//     console.log(txt + "을 실행했구나");
//     return hellPromise("callback hell");
//   })
//   .then((msg) => {
//     console.log("여기는" + msg);
//   });

async function execute() {
  const name = await callPromise("kim");
  console.log(name + "반가워");
  const back = await backPromise("back");
  console.log(back, "을 실행했구나");
  const msg = await hellPromise("callback hell");
  console.log("여기는", msg);
}

execute();
// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb("callback hell");
//   }, 1000);
// }

// // 콜백 함수 실행

// call("kim", (name) => {
//   console.log(name + "반가워");
//   back((text) => {
//     console.log(text + "를 실행했구나");
//     hell((msg) => {
//       console.log("여기는" + msg);
//     });
//   });
// });

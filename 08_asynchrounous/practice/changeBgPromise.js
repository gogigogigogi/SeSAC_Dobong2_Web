function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}
function back(cb) {
  setTimeout(function () {
    cb("back");
  }, 1000);
}
function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}
function execute(name) {
  return new Promise((res, rej) => {
    call(name, (name) => {
      console.log(name + "반가워");
    });
    res();
  });
}

execute("kim").then(() => {
  return new Promise((res, rej) => {
    back((txt) => {
      console.log(txt + "을 실행했구나");
    });
  });
});

// execute("kim").then((result) => {
//   back(result);
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log("back");
//     }, 1000);
//   });
// });

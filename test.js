function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = { name: "철수" };
      console.log("네트워크 요청 성공");
      res(data);
    }, 1000);
  });
}

// getData()
//   .then((data) => {
//     console.log(data);
//     return getData();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// getData()
//   .then(() => {
//     return "hello";
//   })
//   .then((data) => {
//     console.log(data);
//   });

function networkRequest() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("서버 1");
    }, 1000);
  });
}

async function getUser(params) {
  await networkRequest();
  return "별";
}

async function getTodo(params) {
  await networkRequest();
  return ["청소", "밥"];
}
async function getData(params) {
  const user = await getUser();
  await networkRequest();
}

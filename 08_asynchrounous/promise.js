let price;
let product;

function goMart() {
  console.log("마트에 갑니다.");
}

function pickDrink() {
  // 3초 동안 고민하는 함수
  return new Promise(function (res, rej) {
    setTimeout(() => {
      console.log("고민 끝!");
      product = "콜라";
      price = 1500;
      rej("구매 완료!"); // then의 콜백의 인자로 전달
    }, 3000);
  });
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

function exec() {
  goMart();
  pickDrink()
    .then(function (result) {
      console.log("result", result);
      pay();
      // pickDrink가 끝나고 나서 실행되는 작업
    })
    .catch(function (err) {
      console.log("error", err);
    })
    .finally(function () {
      console.log("집으로 돌아갑니다.");
    });
}

exec();

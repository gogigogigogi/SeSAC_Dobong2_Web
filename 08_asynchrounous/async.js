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
      res("구매 완료!");
    }, 3000);
  });
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

exec();

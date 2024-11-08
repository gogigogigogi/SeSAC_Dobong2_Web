const section = document.querySelector("section");
const icecreams = [
  "내가 아인슈페너?!",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
];

for (let i = 0; i < icecreams.length; i++) {
  let img = document.createElement("img");
  img.classList.add("img-box");
  img.src = `../DOM/img/icecream${i + 1}.png`;

  let h3 = document.createElement("h3");
  h3.innerText = `Top${i + 1}`;
  h3.classList.add("text-center");

  let div = document.createElement("div");
  div.innerText = icecreams[i];
  div.classList.add("text-center");

  let article = document.createElement("article");
  article.classList.add("article-box");

  article.append(img);
  article.append(h3);
  article.append(div);
  console.log(article);

  section.append(article);
}

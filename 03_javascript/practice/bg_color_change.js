let html = document.querySelector("html");
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
  let randomNumber1 = Math.floor(Math.random() * 256);
  let randomNumber2 = Math.floor(Math.random() * 256);
  let randomNumber3 = Math.floor(Math.random() * 256);

  html.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  h2.innerText = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
});

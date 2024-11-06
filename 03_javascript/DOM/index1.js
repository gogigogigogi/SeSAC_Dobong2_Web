console.log(document);
console.log(document.URL);
console.log(document.documentElement);

console.log(document.head);
console.log(document.body);
console.log(document.title);

/* 1. getElementById */
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

/* 2. getElementsByClassName */
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[0]);
console.log(document.getElementsByClassName("others"));
console.log(document.getElementsByClassName("others")[0]);

/* 3. getElementsByTagName */
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("div")[0]);

/* 4. getElementsByName (name 속성값) */
console.log(document.getElementsByName("id"));

console.log(document.querySelector(".pink"));
console.log(document.querySelector("[name='id']"));

console.log(document.querySelectorAll(`[name="id"]`));

let pinks = document.querySelectorAll(".pink");
for (let pink of pinks) {
  console.log(pink);
}

const form = document.querySelector("form");
const idInput = document.querySelector("#userid");
const commentInput = document.querySelector("#comment");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ul = document.querySelector(".comment-list");
  const li = document.createElement("li");

  li.innerHTML = `<strong>${idInput.value}</strong> - ${commentInput.value}`;
  ul.append(li);

  idInput.value = "";
  commentInput.value = "";
});

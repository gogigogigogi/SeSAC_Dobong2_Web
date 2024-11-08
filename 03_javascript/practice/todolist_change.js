let todos = document.querySelectorAll(".todo");
let dones = document.querySelectorAll(".done");

for (let todo of todos) {
  todo.classList.remove("todo");
  todo.classList.add("done");
}

for (let done of dones) {
  done.classList.remove("done");
  done.classList.add("todo");
}

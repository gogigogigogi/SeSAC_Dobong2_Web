const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const operator = document.querySelector("#operator");
const resultInput = document.querySelector("#result");

function cal() {
  let result;
  switch (operator.value) {
    case "+":
      result = +value1.value + +value2.value;
      break;
    case "-":
      result = +value1.value - +value2.value;
      break;
    case "*":
      result = +value1.value * +value2.value;
      break;
    case "/":
      result = +value1.value / +value2.value;
      break;
  }
  resultInput.value = result;
}

function resetInput() {
  value1.value = "";
  value2.value = "";
  operator.value = "";
  resultInput.value = "";
}

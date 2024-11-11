console.log($("#div1"));

// 여러 요소에 한 번에 적용됨
$("button").css("color", "red");

function submitjs() {
  document.getElementById("div1").innerText = "반갑습니다";
  document.getElementById("div1").setAttribute("style", "border");
}
function submitjQ() {
  $("#div1").text("hello jQuery");
  $("#div1").css("border", "3px dotted blue");
}

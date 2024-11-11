console.log($(window));
console.log($(document));

// click(): 클릭했을 때
// jQuery에서는 이벤트 이름으로 메소드가 존재함
// 요소.click(function(){}), 요소.hover(function(){}, function(){})...

$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// $(".num").click(function () {
//   $(".num").css("color", "blue");
//   $(this).css("color", "green");
// });

// $(".num").on("click", function () {
//   $(this).css("color", "pink");
// });

const nums = document.querySelectorAll(".num");

for (let num of nums) {
  num.addEventListener("click", function () {
    this.style = "color : yellow";
  });
}

// hover(): 마우스를 올렸을 떄, 마우스를 떼었을 때 정의

$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

// $(window).scroll(function () {
//   console.log("scrolling...");
// });

// /* 2. [키보드 이벤트] */
// input.addEventListener("keydown", function (event) {
//   // console.log(event)

//   // 방향키 아래, 위, 왼쪽, 오른쪽
//   console.log(event.code);
//   console.log(event.key);
//   console.log(event.keyCode);
//   if (event.code === "ArrowLeft") {
//     console.log("왼쪽 방향키 눌렸습니다.");
//   } else if (event.code === "ArrowRight") {
//     console.log("오른쪽 방향키 눌렸습니다.");
//   } else if (event.code === "ArrowUp") {
//     console.log("위쪽 방향키 눌렸습니다.");
//   } else if (event.code === "ArrowDown") {
//     console.log("아래쪽 방향키 눌렸습니다.");
//   } else {
//     console.log("방향키가 아닌 키보드 누르는 중...");
//   }
// });

$(".input-key").keydown(function (event) {
  console.log(event);
  if (event.code === "ArrowLeft") {
    console.log("왼쪽 방향키 눌렸습니다.");
  } else if (event.code === "ArrowRight") {
    console.log("오른쪽 방향키 눌렸습니다.");
  } else if (event.code === "ArrowUp") {
    console.log("위쪽 방향키 눌렸습니다.");
  } else if (event.code === "ArrowDown") {
    console.log("아래쪽 방향키 눌렸습니다.");
  } else {
    console.log("방향키가 아닌 키보드 누르는 중...");
  }
});

function addTodo(e) {
  e.preventDefault();

  let word = $("input[name='todo']").val();
  $(".todos").append(`<li>${word}</li>`);
  $("input[name='todo']").val("");
}

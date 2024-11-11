let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let prevIdx = 0;
let nextIdx = 1;
// TODO2: changeColor 함수 내부 작성
function changeColor() {
  if (prevIdx > colors.length - 1) {
    prevIdx = 0;
  }
  if (nextIdx > colors.length - 1) {
    nextIdx = 0;
  }
  $("div").switchClass(colors[prevIdx], colors[nextIdx]);
  prevIdx++;
  nextIdx++;
}

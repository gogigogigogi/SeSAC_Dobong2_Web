const writer = document.querySelector("#writer");
const content = document.querySelector("#content");
const table = document.querySelector("table");

function writeNote() {
  let tr = document.createElement("tr");
  let writerTd = document.createElement("td");
  let contentTd = document.createElement("td");
  let timeTd = document.createElement("td");

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDay = now.getDate();
  const nowHour = now.getHours();
  const nowMin = now.getMinutes();

  writerTd.innerText = writer.value;
  contentTd.innerText = content.value;
  timeTd.innerText = `${nowYear}-${
    nowMonth + 1
  }-${nowDay}  ${nowHour}:${nowMin}`;

  tr.append(writerTd, contentTd, timeTd);
  table.append(tr);

  writer.value = "";
  content.value = "";
}

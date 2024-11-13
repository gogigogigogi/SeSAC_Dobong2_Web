new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  sectionsColor: [
    "rgb(43, 110, 174)",
    "rgb(208, 65, 84)",
    "rgb(51, 206, 126)",
    "pink",
  ],
  anchors: ["firstPage", "secondPage", "thirdPage"],
  scrollingSpeed: 1000,
});

const samsungChartCtx = document
  .getElementById("samsung-chart")
  .getContext("2d");
const samsungChart = new Chart(samsungChartCtx, {
  type: "line",
  data: {
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        label: "주가",
        data: [
          12000, 19000, 15000, 17000, 20000, 24000, 19000, 15000, 17000, 21000,
          25000, 29000,
        ],
        borderWidth: 5,
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      legend: {
        labels: {
          fontColor: "black",
        },
      },
      xAxes: [
        {
          ticks: {
            fontColor: "black",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "black",
          },
        },
      ],
    },
  },
});

const teslaChartCtx = document.getElementById("tesla-chart").getContext("2d");
const teslaChart = new Chart(teslaChartCtx, {
  type: "line",
  data: {
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        label: "주가",
        data: [
          12000, 15000, 17000, 19000, 20000, 21000, 24000, 25000, 29000, 45000,
          51000, 57000,
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      legend: {
        labels: {
          fontColor: "black",
        },
      },
      xAxes: [
        {
          ticks: {
            fontColor: "black",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "black",
          },
        },
      ],
    },
  },
});

const nvidiaChartCtx = document.getElementById("nvidia-chart").getContext("2d");
const nvidiaChart = new Chart(nvidiaChartCtx, {
  type: "line",
  data: {
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        label: "주가",
        data: [
          12000, 13000, 9000, 11000, 13000, 17000, 22000, 39000, 45000, 69000,
          85000, 100000,
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      legend: {
        labels: {
          fontColor: "black",
        },
      },
      xAxes: [
        {
          ticks: {
            fontColor: "black",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "black",
          },
        },
      ],
    },
  },
});

document.querySelectorAll(".sellBtn").forEach((el) => {
  el.addEventListener("click", function () {
    swal("매도", "1주 판매하시겠습니까?");
  });
});

document.querySelectorAll(".buyBtn").forEach((el) => {
  el.addEventListener("click", function () {
    swal("매수", "1주 구매하시겠습니까?");
  });
});

// document.querySelector(".sellBtn").addEventListener("click", function () {
//   swal("매도", "1주 판매하시겠습니까?");
// });

// document.querySelector(".buyBtn").addEventListener("click", function () {
//   swal("매수", "1주 구매하시겠습니까?");
// });

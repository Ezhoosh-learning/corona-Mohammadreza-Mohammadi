
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [0, 20, 120, 10, 15, 90, 75],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
const data2 = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(250,0,0)",
      tension: 0.1,
    },
  ],
};

const config = {
  type: "line",
  data: data,
};
const config2 = {
  type: "line",
  data: data2,
};

window.onload = function () {
  const ctx1 = document.getElementById("myChart1").getContext("2d");
  new Chart(ctx1, config);

  const ctx2 = document.getElementById("myChart2").getContext("2d");
  new Chart(ctx2, config2);
};

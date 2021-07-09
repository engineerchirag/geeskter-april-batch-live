const date = new Date();
const monthDays = document.querySelector(".days");

const reRenderCalendar = () => {
  const prevMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const currentMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const currentMonthStartIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDay();

  const currentMonthEndIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - currentMonthEndIndex;

  // console.log(currentMonthStartIndex, currentMonthEndIndex, nextDays)

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = date.toDateString();

  let days = "";

  for (let i = currentMonthStartIndex; i > 0; i--) {
    days += `<div class="prev-date">${prevMonthLastDate - i + 1}</div>`;
  }

  for (let j = 1; j <= currentMonthLastDate; j++) {
    if (
      j === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${j}</div>`;
    } else {
      days += `<div>${j}</div>`;
    }
  }

  for (let k = 1; k <= nextDays; k++) {
    days += `<div class="next-date">${k}</div>`;
  }

  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  reRenderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  reRenderCalendar();
});

reRenderCalendar();

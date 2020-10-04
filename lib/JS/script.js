let currentDay = document.querySelector("#currentDay");
console.log("current day placeholder", currentDay);

const m = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.append(m);

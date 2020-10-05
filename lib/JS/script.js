// // let currentDay = document.querySelector("#currentDay");
// console.log("current day placeholder", currentDay);
let userTextArea = $("textarea");
console.log("textarea", userTextArea);
// can access each div by using [0] being 9 A.M.
let saveBtn = $("button");
console.log(saveBtn);
// // can also access each save button [0] being 9 A.M.
// let timeSection = document.querySelectorAll("section");
// console.log(timeSection);
// // like other parts of the row can be accessed [0] being 9 A.M.

$(document).ready(function () {
  let secondCounts = () => {
    let currentDay = $("#currentDay");
    const timeOfDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDay.text(timeOfDay);
  };
  secondCounts();
  setInterval(() => {
    secondCounts();
  }, 1000);

  userTextArea.each(function () {
    let sectionTimes = parseInt($(this).attr("data-set"));
    console.log(this);
    let currentHour = moment().hour();
    console.log(currentHour);
    // Row Times undefined?
    console.log(sectionTimes);
    // only past class showing up for every
    // possibly because its after 5 already?
    if (sectionTimes === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }
    if (sectionTimes < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    if (sectionTimes > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
      console.log(this);
    }
  });
});

// let m9 = moment().format("dddd, MMMM, Do YYYY, 9:00");
// hoursArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// hoursArr.forEach((hours) => {
//   let currentHour = parseInt(moment().format("H"));
// });

// var timeBlockPast =

// need to create past, present, future parameters.
// how to compare current time m to values on rows?
// set css attributes for all who are past
// while comparing them to current times constantly
// changing determined on time of day
// text input event
// an even listener
// paint input on html
// save in local storage
//

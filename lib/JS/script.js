let currentDay = document.querySelector("#currentDay");
console.log("current day placeholder", currentDay);
let userTextArea = document.querySelectorAll("#textarea");
console.log("textarea", userTextArea[0]);
// can access each div by using [0] being 9 A.M.
let saveBtn = document.querySelectorAll("button");
console.log(saveBtn);
// can also access each save button [0] being 9 A.M.
let timeSection = document.querySelectorAll("section");
console.log(timeSection);
// like other parts of the row can be accessed [0] being 9 A.M.
const m = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.append(m);
console.log(m);
// let m9 = moment().format("dddd, MMMM, Do YYYY, 9:00");
hoursArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];

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

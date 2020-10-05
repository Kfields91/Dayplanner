let userTextArea = $("textarea");
console.log("textarea", userTextArea);
// can access each div by using [0] being 9 A.M.
// let saveBtn = $("button");
// console.log(saveBtn);

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
  $(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".userInput").val();
    console.log(userInput);
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem(time, userInput);
  });
  $("9 .userInput").val(localStorage.getItem(9));
  $("#10 .userInput").val(localStorage.getItem(10));
  $("#11 .userInput").val(localStorage.getItem(11));
  $("#12 .userInput").val(localStorage.getItem(12));
  $("#13 .userInput").val(localStorage.getItem(13));
  $("#14 .userInput").val(localStorage.getItem(14));
  $("#15 .userInput").val(localStorage.getItem(15));
  $("#16 .userInput").val(localStorage.getItem(16));
  $("#17 .userInput").val(localStorage.getItem(17));
});

// text input event
// an even listener
// paint input on html
// save in local storage
//

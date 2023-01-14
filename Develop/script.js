// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  let timeNow = dayjs().format('MMMM D, YYYY'); //current date listed at top of page
  let hourOfDay = dayjs().format('H'); //current hour of the day using day.js
  let hourOnPlanner = $(".hour"); //hour listed on the left side of planner
  let writeHere = $(".time-block"); //div that contains all elements for each time slot
  let description = $(".description"); //where to write your to-do information
  let saveButton = $(".saveBtn"); //targets the save buttons

  $('#currentDay').text(timeNow); //displays current time at the top of the page

  console.log(hourOfDay);
  console.log(hourOnPlanner);

  // this function compares the current time to the time on the planner and adds or removes bootstrap classes which change the color to let us know if its in the past, present or future. This should display upon opening the page. 
  function timeCheck() {
    writeHere.each(function () {
      let timeId = parseInt(($(this)).attr('id'));
      let textarea = $(this).children(description);

      if (timeId == hourOfDay) {
        textarea.addClass('present');

      } else if (timeId < hourOfDay) {
        textarea.addClass('past');

      } else {
        textarea.addClass('future');
      }
    })
  }

  timeCheck()


  saveButton.on('click', () => {
    console.log("Testing")
    let textToSave = description.val();
    let timeStamp = parseInt(($(this)).attr('id'));
    localStorage.setItem(timeStamp, textToSave); //<<< textToSave needs to go in second argument here but I can't get it to work
  });


})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // DONE: Add code to display the current date in the header of the page.

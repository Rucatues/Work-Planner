$(document).ready(function () {

  let timeNow = dayjs().format('MMMM D, YYYY'); //current date listed at top of page
  let hourOfDay = dayjs().format('H'); //current hour of the day using day.js
  let hourOnPlanner = $(".hour"); //hour listed on the left side of planner

  $('#currentDay').text(timeNow); //displays current time at the top of the page

  console.log(hourOfDay);
  console.log(hourOnPlanner);

  // this function compares the current time to the time on the planner and adds or removes bootstrap classes which change the color to let us know if its in the past, present or future. This should display upon opening the page. 
  function timeCheck() {
    $(".description").each(function () {
      let timeId = parseInt(($(this)).attr('id'));

      if (timeId == hourOfDay) {
        $(this).addClass('present');

      } else if (timeId < hourOfDay) {
        $(this).addClass('past');

      } else {
        $(this).addClass('future');
      }
    })
  }

  timeCheck()

  //click event for Save Button
  $(".saveBtn").on('click', function (event) {
    console.log("Testing")
    let textToSave = $(this).siblings("textArea").val();
    let timeOfClick = $(this).siblings("textArea").attr('id');
    console.log(timeOfClick);
    if (textToSave) {
      localStorage.setItem(timeOfClick, textToSave);
    }
  });

  //function to get data
  const retrieveData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = (localStorage.key(i));
      let data = (localStorage.getItem(key));
      $('#' + key).val(data);
    }
  }

  retrieveData()

})

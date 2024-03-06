"use strict";
const $ = (selector) => document.querySelector(selector);

const padSingleDigit = (num) => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
  try {
    let l_time = new Date(), // Fetching current machine time
      l_hours = l_time.getHours(), // get hour
      l_min = padSingleDigit(l_time.getMinutes()), // extracting minutes value
      l_sec = padSingleDigit(l_time.getSeconds()), // extracting seconds value
      l_am_pm = "AM"; // default value for ampm

    if (l_hours > 12) {
      // logic to convert time from 24-hour to 12-hour
      l_hours = l_hours - 12;
      l_am_pm = "PM";
    }
    if (l_hours == 12) {
      l_am_pm = "PM";
    }
    l_hours = l_hours ? l_hours : 12; // if hour is '0' change hours vale to '12'

    // Please note: Hour is not padded with 0 to match screenshot in instruction sheet

    //displaying value in respective spans
    $("#hours").textContent = l_hours;
    $("#minutes").textContent = l_min;
    $("#seconds").textContent = l_sec;
    $("#ampm").textContent = l_am_pm;
  } catch (e) {
    alert("Something went wrong. Please contact system admistrator.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  displayCurrentTime(); // show current time as soon as page loads
  setInterval(displayCurrentTime, 1000); // update time every second
});

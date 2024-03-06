"use strict";
const $ = (selector) => document.querySelector(selector);

const padSingleDigit = (num) => num.toString().padStart(2, "0");
const padDoubleDigit = (num) => num.toString().padStart(3, "0"); // padding for miliseconds

const displayCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let ampm = "AM"; // set default value

  // correct hours and AM/PM value for display
  if (hours > 12) {
    // convert from military time
    hours = hours - 12;
    ampm = "PM";
  } else {
    // adjust 12 noon and 12 midnight
    switch (hours) {
      case 12: // noon
        ampm = "PM";
        break;
      case 0: // midnight
        hours = 12;
        ampm = "AM";
    }
  }

  $("#hours").textContent = hours;
  $("#minutes").textContent = padSingleDigit(now.getMinutes());
  $("#seconds").textContent = padSingleDigit(now.getSeconds());
  $("#ampm").textContent = ampm;
};

//declaring global variables for stop watch timer & interval object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
  try {
    elapsedMilliseconds += 10; // increase milliseconds by 10 ms
    if (elapsedMilliseconds >= 1000) {
      // Logic to set seconds and reset miliseconds
      elapsedSeconds += 1;
      elapsedMilliseconds = 0;
    }
    if (elapsedSeconds >= 60) {
      // Logic to set minutes and reset seconds
      elapsedMinutes += 1;
      elapsedSeconds = 0;
    }

    //display new stopwatch time
    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = padDoubleDigit(elapsedMilliseconds);
  } catch (e) {
    alert("Something went wrong. Please contact system admistrator.");
  }
};
const startStopwatch = (evt) => {
  if (!stopwatchTimer) {
    // Skip creating new interval if stopwatch active
    tickStopwatch(); // first tick
    stopwatchTimer = setInterval(tickStopwatch, 10); // subsequent ticks and stopwatchTimer assignment
  }
  evt.preventDefault(); // preventing link action
};

const stopStopwatch = (evt) => {
  clearInterval(stopwatchTimer); // stop timer
  stopwatchTimer = null; // reset interval Object
  evt.preventDefault(); // preventing link action
};

const resetStopwatch = (evt) => {
  clearInterval(stopwatchTimer); // stop timer
  stopwatchTimer = null; // reset interval Object

  // reset global variables for stop watch timer and display values
  $("#s_minutes").textContent = padSingleDigit((elapsedMinutes = 0));
  $("#s_seconds").textContent = padSingleDigit((elapsedSeconds = 0));
  $("#s_ms").textContent = padDoubleDigit((elapsedMilliseconds = 0));
  evt.preventDefault(); // preventing link action
};

document.addEventListener("DOMContentLoaded", () => {
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
  // set up stopwatch event handlers
  $("#start").addEventListener("click", startStopwatch);
  $("#stop").addEventListener("click", stopStopwatch);
  $("#reset").addEventListener("click", resetStopwatch);
});

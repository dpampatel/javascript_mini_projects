"use strict";

const createStopwatch = (p_minuteSpan, p_secondSpan, p_msSpan) => {
  // private state
  //global stop watch timer variable and elapsed time object
  let stopwatchTimer = null;
  let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };
  const padSingleDigit = (num) => num.toString().padStart(2, "0");
  const tickStopwatch = () => {
    try {
      // increment milliseconds by 10 milliseconds
      elapsed.milliseconds = elapsed.milliseconds + 10;

      // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
      if (elapsed.milliseconds == 1000) {
        elapsed.seconds++;
        elapsed.milliseconds = 0;
      }
      // if seconds total 60, increment minutes by one and reset seconds to zero
      if (elapsed.seconds == 60) {
        elapsed.minutes++;
        elapsed.seconds = 0;
      }

      //display new stopwatch time
      p_minuteSpan.text(padSingleDigit(elapsed.minutes));
      p_secondSpan.text(padSingleDigit(elapsed.seconds));
      p_msSpan.text(elapsed.milliseconds);
    } catch (error) {
      alert("Something went wrong. Please contact system admisitrator.");
    }
  };
  return {
    // public methods
    start() {
      if (!stopwatchTimer) {
        // do first tick of stop watch and then set interval timer to tick
        // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
        // variable so next two functions can stop timer.
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
      }
    },
    stop() {
      // stop timer
      clearInterval(stopwatchTimer);
      stopwatchTimer = null;
    },
    reset() {
      // stop timer
      clearInterval(stopwatchTimer);
      stopwatchTimer = null;
      // clear elapsed object and stopwatch display
      elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

      p_minuteSpan.text("00");
      p_secondSpan.text("00");
      p_msSpan.text("000");
    },
  };
};

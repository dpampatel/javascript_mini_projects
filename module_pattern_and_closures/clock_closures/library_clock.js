"use strict";

const createClock = (p_hourSpan, p_minuteSpan, p_secondSpan, p_ampmSpan) => {
  // private state
  const padSingleDigit = (num) => num.toString().padStart(2, "0");
  const displayCurrentTime = () => {
    try {
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
      p_hourSpan.text(hours);
      p_minuteSpan.text(padSingleDigit(now.getMinutes()));
      p_secondSpan.text(padSingleDigit(now.getSeconds()));
      p_ampmSpan.text(ampm);
    } catch (error) {
      alert("Something went wrong. Please contact system admisitrator.");
    }
  };

  return {
    // public methods
    start() {
      // set initial clock display and then set interval timer to display
      // new time every second. Don't store timer object because it
      // won't be needed - clock will just run.
      displayCurrentTime();
      setInterval(displayCurrentTime, 1000);
    },
  };
};

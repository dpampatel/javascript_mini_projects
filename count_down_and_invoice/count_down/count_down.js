"use strict";

$(document).ready(() => {
  $("#countdown").click(() => {
    const eventName = $("#event").val();
    const eventDate = $("#date").val();
    const messageLbl = $("#message");
    const l_month_list = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // make sure user entered task and event date
    if (eventName.length == 0 || eventDate.length == 0) {
      messageLbl.text("Please enter both a name and a date.");
      return;
    }

    // make sure event date string has two slashes
    const dateParts = eventDate.split("/");
    if (dateParts.length != 3) {
      messageLbl.text("Please enter the date in MM/DD/YYYY format.");
      return;
    }
    // make sure event date string has a 4-digit year
    const year = eventDate.substring(eventDate.length - 4);
    if (isNaN(year)) {
      messageLbl.text("Please enter the date in MM/DD/YYYY format.");
      return;
    }

    let l_month = Number(dateParts[0]),
      l_day = Number(dateParts[1]);

    if (isNaN(l_month) || isNaN(l_day)) {
      messageLbl.text("Please enter the date in MM/DD/YYYY format.");
      return;
    }
    if (l_month < 1 || l_month > 12) {
      messageLbl.text("Please enter a valid month.");
      return;
    }

    if (l_month == 2) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        if (l_day < 1 || l_day > 29) {
          messageLbl.text(
            `Please enter a valid date for the month of ${l_month_list[l_month]}.`
          );
          return;
        }
      } else {
        if (l_day < 1 || l_day > 28) {
          messageLbl.text(
            `Please enter a valid date for the month of ${l_month_list[l_month]}.`
          );
          return;
        }
      }
    } else if (l_month == 4 || l_month == 6 || l_month == 9 || l_month == 11) {
      if (l_day < 1 || l_day > 30) {
        messageLbl.text(
          `Please enter a valid date for the month of ${l_month_list[l_month]}.`
        );
        return;
      }
    } else if (l_day < 1 || l_day > 31) {
      messageLbl.text(
        `Please enter a valid date for the month of ${l_month_list[l_month]}.`
      );
      return false;
    }

    // convert event date string to Date object and check for validity
    let date = new Date(eventDate);
    if (date == "Invalid Date") {
      messageLbl.text("Please enter the date in MM/DD/YYYY format.");
      return;
    }

    // capitalize each word of event name
    let formattedName = "";
    const words = eventName.split(" ");
    for (const i in words) {
      const firstLetter = words[i].substring(0, 1).toUpperCase();
      const word = firstLetter + words[i].substring(1).toLowerCase();
      formattedName += word.padEnd(word.length + 1);
    }
    formattedName = formattedName.trimEnd();

    // calculate days
    const today = new Date();
    const msFromToday = date.getTime() - today.getTime();
    const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds
    let daysToDate = Math.ceil(msFromToday / msForOneDay);

    // create and display message
    let msg = "";
    date = date.toDateString();
    if (daysToDate == 0) {
      msg = `Hooray! Today is ${formattedName}! (${date})`;
    } else if (daysToDate > 0) {
      msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
    } else if (daysToDate < 0) {
      daysToDate = Math.abs(daysToDate);
      msg = `${formattedName} happened ${daysToDate} day(s) ago. 
                  (${date})`;
    }
    messageLbl.text(msg);
  });

  $("#event").focus();
});

"use strict";

// global error msg and global student name and scores array
let g_error = "Something went wrong. Please contact system administrator.",
  g_data = [],
  g_scores = [];
const displayScores = (scores, scoresString) => {
  try {
    let sum = 0;
    scores.forEach((number) => {
      sum += parseInt(number); // adding and parsing string value into number
    });

    $("#scores").val(scoresString.join("\n")); // display op, \n for new line
    $("#avr_score").text((sum / scores.length).toFixed(2)); //display op, rounding avg upto 2 decimal
  } catch (err) {
    alert(g_error);
  }
};

$(document).ready(() => {
  try {
    $("#add_button").click(() => {
      try {
        // fetch and trim values from all the fields into local variables
        let l_firstName = $("#first_name").val()?.trim(),
          l_lastName = $("#last_name").val()?.trim(),
          l_score = $("#score").val()?.trim();

        // validations
        if (l_firstName == "" || l_lastName == "") {
          alert("Please enter valid name.");
          return;
        }
        if (!l_score || isNaN(l_score)) {
          alert("Please enter valid score.");
          return;
        }

        let l_concat = `${l_lastName} , ${l_firstName} : ${l_score}`;
        g_data.push(l_concat); // push concatenated values into array
        g_scores.push(l_score); // push into score for average

        displayScores(g_scores, g_data);
        // get the add form ready for next entry
        $("#first_name").val("");
        $("#last_name").val("");
        $("#score").val("");
        $("#first_name").focus();
      } catch (err) {
        alert(g_error);
      }
    }); // end click()

    $("#clear_button").click(() => {
      g_scores = [];
      g_data = [];
      // remove the score data from the web page
      $("#avr_score").text("");
      $("#scores").val("");

      $("#first_name").focus();
    }); // end click()

    $("#sort_button").click(() => {
      displayScores(g_scores, g_data.sort()); //sort and display scores
    }); // end click()

    $("#first_name").focus();
  } catch (err) {
    alert(g_error);
  }
}); // end ready()

"use strict";
const $ = (selector) => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

/* round upto two decimal */
const roundToTwo = (p_number) =>
  Math.round((p_number + Number.EPSILON) * 100) / 100;

const displayResults = () => {
  try {
    let l_sum = 0,
      l_average = 0,
      l_high = 0,
      l_highScoreStudent = "";
    for (let [index, item] of scores.entries()) {
      //Loop to calculate high score and total for average
      l_sum += item;
      if (item > l_high) {
        l_high = item;
        l_highScoreStudent = names[index];
      }
    }
    l_average = roundToTwo(l_sum / scores.length);

    if ($("#average_score") == null) {
      //using id to check if component exist
      const divResults = $("#results"),
        h2 = document.createElement("h2"),
        text = document.createTextNode("Results"),
        p1 = document.createElement("p"),
        p2 = document.createElement("p");
      p1.setAttribute("id", "average_score");
      p2.setAttribute("id", "high_score");
      h2.appendChild(text); // Results in header
      p1.appendChild(document.createTextNode(`Average score = ${l_average}`));
      p2.appendChild(
        document.createTextNode(
          `High score = ${l_highScoreStudent} with a score of ${l_high}`
        )
      );
      divResults.appendChild(h2);
      divResults.appendChild(p1);
      divResults.appendChild(p2);
    } else {
      const l_pAvg = document.getElementById("average_score");
      const l_pHigh = document.getElementById("high_score");
      //l_pAvg.innerHTML = `Average score = ${l_average}`;
      //l_pHigh.innerHTML = `High score = ${l_highScoreStudent} with a score of ${l_high}`;

      //replace
      l_pAvg.replaceChild(
        document.createTextNode(`Average score = ${l_average}`),
        l_pAvg.childNodes[0]
      );
      l_pHigh.replaceChild(
        document.createTextNode(
          `High score = ${l_highScoreStudent} with a score of ${l_high}`
        ),
        l_pHigh.childNodes[0]
      );
    }
  } catch (e) {
    console.error(e);
  }
};
const displayScores = () => {
  try {
    const divScores = $("#scores"),
      h2 = document.createElement("h2");

    divScores.textContent = "";
    h2.appendChild(document.createTextNode("Scores"));
    divScores.appendChild(h2);
    for (let [index, items] of scores.entries()) {
      const nameLabel = document.createElement("label");
      const scoreLabel = document.createElement("label");
      nameLabel.appendChild(document.createTextNode(names[index]));
      scoreLabel.appendChild(document.createTextNode(items));
      divScores.appendChild(nameLabel);
      divScores.appendChild(scoreLabel);
      divScores.appendChild(document.createElement("br")); // new line
    }
  } catch (e) {
    console.error(e);
  }
};
const addScore = () => {
  try {
    let l_name = $("#name"),
      l_score = $("#score"),
      l_scoreVal = l_score.value,
      l_nameSpan = l_name.parentNode.getElementsByTagName("span")[0],
      l_scoreSpan = l_score.parentNode.getElementsByTagName("span")[0],
      l_violation = false; // using flag to check violations
    l_nameSpan.innerHTML = "";
    l_scoreSpan.innerHTML = "";

    /* Validations for Name */
    if (l_name.value == "") {
      l_nameSpan.innerHTML = "Please enter a name";
      l_violation = true;
    }
    /* Validations for Score */
    if (
      isNaN(l_scoreVal) ||
      isNaN(parseFloat(l_scoreVal)) ||
      parseFloat(l_scoreVal) < 0 ||
      parseFloat(l_scoreVal) > 100
    ) {
      l_scoreSpan.innerHTML = "Score must be between 0 and 100";
      l_violation = true;
    }
    if (!l_violation) {
      /* If no violation, push in array */
      scores.push(roundToTwo(parseFloat(l_scoreVal)));
      names.push(l_name.value);
    }
    $("#name").focus();
  } catch (e) {
    console.error(e);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // add event handlers
  $("#add").addEventListener("click", addScore);
  $("#display_results").addEventListener("click", displayResults);
  $("#display_scores").addEventListener("click", displayScores);
  $("#name").focus(); //focus on load
});

"use strict";
if (process.argv.length < 3) {
  console.error("Please add scores: node index <score 1> <score 2>");
} else {
  let scores = []; // updatng const to let

  const displayScores = () => scores.join(", ");

  const calculateAverage = () => {
    const total = scores.reduce((prev, curr) => prev + parseInt(curr), 0);
    return total / scores.length;
  };

  // load user entries in scores array
  [, , ...scores] = process.argv;
  // display all scores
  console.log("All scores:", displayScores());
  // display average score
  console.log("Average score:", calculateAverage());

  console.log("\u00A9 Deepam Mahesh Patel | #8812460 | 2023");
}

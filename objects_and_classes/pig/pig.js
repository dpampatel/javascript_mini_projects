"use strict";
const g_error = "Something went wrong. Please contact system administrator.";
$(document).ready(() => {
  $("#new_game").click(() => {
    // clear any previous data from the page
    $("#result").text("");
    $("#score1").val("0");
    $("#score2").val("0");
    $("#die").val("0");
    $("#total").val("0");

    // reset the game object and then start a new game, passing in
    // the players' names
    game.reset().start($("#player1").val(), $("#player2").val());

    // if the game object contains valid data...
    if (game.isValid) {
      // display the "turn" div, use the currentPlayer property of
      // the game object to display the name of the player whose turn
      // it is, and set the focus on the Roll button
      $("#turn").removeClass("hide");
      $("#current").text(game.currentPlayer.name);
      $("#roll").focus();
    } else {
      // hide the "turn" div, notify the user to enter player names,
      // and set the focus on the Player 1 text box
      $("#turn").addClass("hide");
      alert("Please enter two player names.");
      $("#player1").focus();
    }
  }); // end click()

  $("#roll").click(() => {
    try {
      if (game.player1.total >= 100 || game.player2.total >= 100) {
        alert("Start New Game?");
        $("#new_game").click();
        return;
      }
      game.currentPlayer?.takeTurn();
      $("#die").val(game.currentPlayer?.roll || "");
      if (game.currentPlayer?.isBust === true) {
        $("#total").val(0);
        game.changePlayer();
        $("#current").text(game.currentPlayer?.name);
      } else {
        $("#total").val(game.currentPlayer?.turn);
      }
      $("#roll").focus();
    } catch (error) {
      alert(g_error);
    }
  }); // end click()

  $("#hold").click(() => {
    try {
      let winner = game.hold($("#score1"), $("#score2")).checkWinner();
      if (winner === "none") {
        $("#die").val(0);
        $("#total").val(0);
        game.changePlayer();
        $("#current").text(game.currentPlayer?.name || "");
        $("#roll").focus();
      } else {
        $("#current").text(
          `${game.checkWinner()} is the winner! Please start the new game! No ones`
        );
      }
    } catch (error) {
      alert(g_error);
    }
  }); // end click()

  // set focus on initial page load
  $("#player1").focus();
}); // end ready()

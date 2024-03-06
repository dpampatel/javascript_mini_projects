"use strict";

$(document).ready(() => {
  $("#calculate").click(() => {
    try {
      // get the number of cents from the user
      let cents = Math.floor(parseInt($("#cents").val()));
      if (isNaN(cents) || cents < 0 || cents > 99) {
        throw "invalid error";
      } else {
        $("#cents").val(cents);
        const coins = new Coins(); // creating object of class Coins
        coins.makeChange(cents); // call method for calculation

        // display the results of the calculations
        // by using properties of coins object
        $("#quarters").val(coins.quarters);
        $("#dimes").val(coins.dimes);
        $("#nickels").val(coins.nickels);
        $("#pennies").val(coins.cents);
      }
    } catch (error) {
      alert("Please enter a valid number between 0 and 99");
    } finally {
      // set focus on cents text box
      $("#cents").focus();
    }
  }); // end click() method

  // set focus on cents text box on initial load
  $("#cents").focus();
}); // end ready() method

"use strict";

class Coins {
  constructor() {
    this.quarters = 0;
    this.dimes = 0;
    this.nickels = 0;
    this.cents = 0;
  }

  makeChange(p_totalCents) {
    try {
      // calculate the number of quarters
      this.quarters = Math.floor(p_totalCents / 25); // get number of quarters
      p_totalCents = p_totalCents % 25; // assign the remainder to the p_totalCents variable

      // calculate the number of dimes
      this.dimes = Math.floor(p_totalCents / 10); // get number of dimes
      p_totalCents = p_totalCents % 10; // assign the remainder to the p_totalCents variable

      // calculate the number of nickels
      this.nickels = Math.floor(p_totalCents / 5);

      // calculate the number of nickels and pennies
      this.cents = p_totalCents % 5;
    } catch (error) {
      alert("Please enter a valid number between 0 and 99");
    }
  }
}

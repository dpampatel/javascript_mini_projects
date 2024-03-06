"use strict";
const $ = (selector) => document.querySelector(selector);

/*********************
 *  helper functions  *
 **********************/
const calculateCelsius = (temp) => ((temp - 32) * 5) / 9;
const calculateFahrenheit = (temp) => (temp * 9) / 5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
  $("#degree_label_1").innerHTML = label1Text;
  $("#degree_label_2").innerHTML = label2Text;
  $("#degrees_computed").value = "";
  $("#message").innerHTML = "";
  $("#degrees_entered").select();
};

/****************************
 *  event handler functions  *
 *****************************/
const convertTemp = () => {
  let isFtoC = $("#to_celsius").checked,
    l_degreesEntered = $("#degrees_entered").value;
  if (isNaN(l_degreesEntered) || isNaN(parseFloat(l_degreesEntered))) {
    $("#degrees_computed").value = "";
    $("#message").innerHTML = "You must enter a valid number for degrees.";
    $("#degrees_entered").select();
    return;
  }
  if (isFtoC) {
    /* Check selected option */
    $("#degrees_computed").value = Math.round(
      calculateCelsius(l_degreesEntered)
    );
  } else {
    $("#degrees_computed").value = Math.round(
      calculateFahrenheit(l_degreesEntered)
    );
  }
  $("#message").innerHTML = "";
  $("#degrees_entered").select();
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () =>
  toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
  // add event handlers
  $("#convert").addEventListener("click", convertTemp);
  $("#to_celsius").addEventListener("click", toCelsius);
  $("#to_fahrenheit").addEventListener("click", toFahrenheit);

  // move focus
  $("#degrees_entered").focus();
});

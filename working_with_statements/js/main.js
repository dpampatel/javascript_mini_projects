"use strict";
const $ = (selector) => document.querySelector(selector); // to get element

converter.onFahrenheitChange = (event) => {
  /* Arrow function to convert F to C*/
  try {
    let l_fahrenheit = $("#id_fahrenheit").value;
    if (isNaN(parseFloat(l_fahrenheit))) {
      /*error handling*/
      $("#id_celsius").value = "";
      return;
    }
    $("#id_celsius").value =
      Math.round((((l_fahrenheit - 32) * 5) / 9) * 100) / 100; /* calculation*/
    $("#id_thanks").hidden = false; // show message
  } catch (e) {
    alert(g_error);
  }
};

converter.onCelsiusChange = (event) => {
  /* Arrow function to convert C to F*/
  try {
    let l_celsius = $("#id_celsius").value;
    if (isNaN(parseFloat(l_celsius))) {
      /*error handling*/
      $("#id_fahrenheit").value = "";
      return;
    }
    $("#id_fahrenheit").value =
      Math.round(((l_celsius * 9) / 5 + 32) * 100) / 100; /* calculation*/
    $("#id_thanks").hidden = false; // show message
  } catch (e) {
    alert(g_error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  /* binding events and default values*/
  $("#id_fahrenheit").addEventListener("input", converter.onFahrenheitChange);
  $("#id_celsius").addEventListener("input", converter.onCelsiusChange);
  $("#id_fahrenheit").value = 212; // default values
  $("#id_celsius").value = 100; // default values
  /*$('#id_btn_part_2').addEventListener(
    'click',
    converter.fahrenheitToCentigrade
  );*/
  converter.fahrenheitToCentigrade();
  $("#id_fahrenheit").focus();
});

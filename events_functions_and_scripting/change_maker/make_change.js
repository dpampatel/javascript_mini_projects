"use strict";

const $ = (selector) => document.querySelector(selector);

/*variable declaration:
l_ for local, 
m_ for module, 
g_ for global*/

const g_error =
    "Something went wrong. Please enter the correct value or contact the System Administrator.",
  g_change = ["quarters", "dimes", "nickels", "pennies"];

const clearResult = () => {
  try {
    /* Loop to clear values */
    for (let l_change of g_change) {
      $(`#${l_change}`).value = "";
    }
  } catch (e) {
    console.error(e);
    alert(g_error);
  }
};

const makeChange = (p_cent) => {
  try {
    /* Loop to evaluate change */
    let l_changeValue = [25, 10, 5, 1];
    for (let [index, l_change] of g_change.entries()) {
      let l_count = parseInt(p_cent / l_changeValue[index]);
      p_cent %= l_changeValue[index];
      $(`#${l_change}`).value = l_count; // set result
    }
  } catch (e) {
    console.error(e);
    alert(g_error);
  }
};

const processEntry = () => {
  try {
    const l_centErrMsg = "Please enter a valid number";
    let l_cent = $("#cents").value;
    /* parseInt("123abcd") is 123 */
    /* validations for cent */
    if (isNaN(l_cent) || isNaN(parseInt(l_cent))) {
      clearResult();
      alert(l_centErrMsg);
      return;
    }
    l_cent = parseInt(l_cent);
    if (l_cent < 0 || l_cent > 99) {
      clearResult();
      alert(l_centErrMsg);
      return;
    }
    /* In case user enters valid floating number */
    $("#cents").value = l_cent;

    /* Call makeChange() if valid number */
    makeChange(l_cent);
  } catch (e) {
    console.error(e);
    alert(g_error);
  } finally {
    /* Focus Cent Field */
    $("#cents").focus();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntry);
  $("#cents").addEventListener("click", () => ($("#cents").value = ""));
  $("#cents").focus();
});

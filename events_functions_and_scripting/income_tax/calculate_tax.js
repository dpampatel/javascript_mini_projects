"use strict";
const $ = (selector) => document.querySelector(selector);

const g_error =
  "Something went wrong. Please enter the correct value or contact the System Administrator.";
/* round upto two decimal */
const roundToTwo = (p_number) =>
  Math.round((p_number + Number.EPSILON) * 100) / 100;

const clearResult = () => {
  $("#tax").value = "";
};
const calculateTax = (p_income) => {
  try {
    let l_tax = 0;
    p_income = parseInt(p_income);
    let l_taxable = p_income;
    /* In case user enters valid floating number */
    $("#income").value = p_income;

    /* Assignment 2 - Part 3 expects using nested if */

    /* without loop */
    /*if (p_income > 0) {
      if (p_income <= 9875) {
        l_tax += l_taxable * 0.1;
      } else {
        l_tax += (9875 - 0) * 0.10;
        l_taxable = p_income - 9875;
        if (p_income <= 40125) {
          l_tax += l_taxable * 0.12;
        } else {
          l_tax += (40125 - 9875) * 0.12;
          l_taxable = p_income - 40125;
        }
      }
    }*/

    /* with loop */
    let l_slab = [0, 9875, 40125, 85525, 163300, 207350, 518400],
      l_slabRate = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
    for (let index = 0; index < l_slab.length; index++) {
      //debugger;
      /* Exit condition */
      if (p_income > l_slab[index]) {
        if (p_income <= l_slab[index + 1]) {
          l_tax += l_taxable * l_slabRate[index]; // if income less then slab calculate tax
        } else {
          let max = l_slab[index + 1] ? l_slab[index + 1] : p_income; // for values > 518400
          l_tax += (max - l_slab[index]) * l_slabRate[index]; // calculate range tax (to - from) * rate
          l_taxable = p_income - max; // reduce max slab amount from total
        }
      } else {
        break;
      }
      //console.log(l_slab[index] + " - " + l_slab[index + 1] + " | " + l_tax);
    }
    l_tax = roundToTwo(l_tax).toFixed(2);
    return l_tax;
  } catch (e) {
    console.error(e);
    alert(g_error);
    return "";
  }
};
const processEntry = () => {
  try {
    let l_income = $("#income").value;
    /* parseInt("123abcd") is 123 */
    /* validations for income */
    if (
      isNaN(l_income) ||
      isNaN(parseInt(l_income)) ||
      parseInt(l_income) <= 0
    ) {
      clearResult();
      alert("Please enter a valid number > 0");
      return;
    }

    /* Call calculateTax() if valid number */
    $("#tax").value = calculateTax(l_income);
  } catch (e) {
    console.error(e);
    alert(g_error);
  } finally {
    $("#income").focus();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // add event handlers
  $("#calculate").addEventListener("click", processEntry);
  $("#income").addEventListener("click", () => ($("#income").value = ""));
  $("#income").focus();
});

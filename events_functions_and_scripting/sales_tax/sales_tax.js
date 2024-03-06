"use strict";

const $ = (selector) => document.querySelector(selector);

/*variable declaration:
l_ for local, 
m_ for module, 
g_ for global*/

const g_error =
  "Something went wrong. Please enter the correct value or contact the System Administrator.";
/* round upto two decimal */
const roundToTwo = (p_number) =>
  Math.round((p_number + Number.EPSILON) * 100) / 100;

/* clear input field functions */
const clearSubTotal = () => {
  $("#subtotal").value = "";
};
const clearTaxRate = () => {
  $("#tax_rate").value = "";
};
const clearResultAndFocus = (p_focus) => {
  try {
    $("#sales_tax").value = "";
    $("#total").value = "";
    $(p_focus).focus();
    /* Focus subtotal or tax rate on clear and calculate*/
  } catch (e) {
    console.error(e);
    alert(g_error);
  }
};
/* Clear button click */
const clearAll = () => {
  try {
    clearSubTotal();
    clearTaxRate();
    clearResultAndFocus("#subtotal");
  } catch (e) {
    console.error(e);
    alert(g_error);
  }
};

/* Calculate button click*/
const processEntries = () => {
  try {
    const l_subTotalErrMsg = "Subtotal must be > 0 and < 10000",
      l_taxRateErrMsg = "Tax Rate must be > 0 and < 12";

    /* Get user entries */
    let l_subtotal = $("#subtotal").value,
      l_taxRate = $("#tax_rate").value,
      l_salesTax,
      l_total;

    /* parseFloat("123abcd") is 123 */
    /* validations for sub total */
    if (isNaN(l_subtotal) || isNaN(parseFloat(l_subtotal))) {
      clearResultAndFocus("#subtotal");
      alert(l_subTotalErrMsg);
      return;
    }
    l_subtotal = parseFloat(l_subtotal);
    if (l_subtotal <= 0 || l_subtotal >= 10000) {
      clearResultAndFocus("#subtotal");
      alert(l_subTotalErrMsg);
      return;
    }

    /* validations for tax rate */
    if (isNaN(l_taxRate) || isNaN(parseFloat(l_taxRate))) {
      clearResultAndFocus("#tax_rate");
      alert(l_taxRateErrMsg);
      return;
    }
    l_taxRate = parseFloat(l_taxRate);
    if (l_taxRate <= 0 || l_taxRate >= 12) {
      clearResultAndFocus("#tax_rate");
      alert(l_taxRateErrMsg);
      return;
    }

    /* Calculation */
    l_total = l_subtotal * (1 + l_taxRate / 100);
    l_total = roundToTwo(l_total);
    l_salesTax = l_total - l_subtotal;
    l_salesTax = roundToTwo(l_salesTax);

    /* Result */
    $("#sales_tax").value = l_salesTax;
    $("#total").value = l_total;

    $("#subtotal").focus();
    /* Focus subtotal on calculate */
  } catch (e) {
    console.error(e);
    alert(g_error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  try {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearAll);
    $("#subtotal").addEventListener("click", clearSubTotal);
    $("#tax_rate").addEventListener("click", clearTaxRate);
    $("#subtotal").focus();
    /* Focus subtotal on load */
  } catch (e) {
    console.error(e);
    alert(g_error);
  }
});

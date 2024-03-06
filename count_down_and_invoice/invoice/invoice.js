"use strict";

const calculateDiscount = (customer, subtotal) => {
  if (customer == "reg") {
    if (subtotal >= 100 && subtotal < 250) {
      return 0.1;
    } else if (subtotal >= 250 && subtotal < 500) {
      return 0.25;
    } else if (subtotal >= 500) {
      return 0.3;
    } else {
      return 0;
    }
  } else if (customer == "loyal") {
    return 0.3;
  } else if (customer == "honored") {
    if (subtotal < 500) {
      return 0.4;
    } else {
      return 0.5;
    }
  }
};
const dateFormat = (p_date) => {
  let l_month = p_date.getMonth(),
    l_day = p_date.getDate(),
    l_year = p_date.getFullYear();

  l_month = (l_month + 1).toString().padStart(2, "0");
  l_day = l_day.toString().padStart(2, "0");
  return `${l_month}/${l_day}/${l_year}`;
};

const resetFields = () => {
  $("#type").val("reg");
  $("#subtotal").val("");
  $("#invoice_date").val("");
  $("#percent").val("");
  $("#discount").val("");
  $("#total").val("");
  $("#due_date").val("");

  // set focus on type drop-down when done
  $("#type").focus();
};

$(document).ready(() => {
  $("#calculate").click(() => {
    const customerType = $("#type").val();
    let subtotal = $("#subtotal").val();
    subtotal = parseFloat(subtotal);
    if (isNaN(subtotal) || subtotal <= 0) {
      alert("Subtotal must be a number greater than zero.");
      $("#clear").click();
      $("#subtotal").focus();
      return;
    }

    const discountPercent = calculateDiscount(customerType, subtotal);
    const discountAmount = subtotal * discountPercent;
    const invoiceTotal = subtotal - discountAmount;

    $("#subtotal").val(subtotal.toFixed(2));
    $("#percent").val((discountPercent * 100).toFixed(2));
    $("#discount").val(discountAmount.toFixed(2));
    $("#total").val(invoiceTotal.toFixed(2));

    // set focus on type drop-down when done
    $("#type").focus();

    let l_invoice_date = $("#invoice_date").val(),
      l_inv_date = new Date(l_invoice_date);

    if (l_invoice_date != "") {
      alert("Invalid invoice date.");
      $("#clear").click();
      $("#invoice_date").focus();
      return;
    }
    let l_current_date;
    if (l_invoice_date == "") {
      l_current_date = dateFormat(new Date());
    } else {
      l_current_date = dateFormat(l_inv_date);
    }

    let l_due_date = new Date(l_current_date);
    l_due_date.setDate(l_due_date.getDate() + 30);

    $("#invoice_date").val(l_current_date);
    $("#due_date").val(dateFormat(l_due_date));
  });

  $("#clear").click(() => {
    resetFields();
  });

  // set focus on type drop-down on initial load
  $("#type").focus();
});

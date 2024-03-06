"use strict";

$(document).ready(() => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/,
    phonePattern = /^\d{3}-\d{3}-\d{4}$/,
    datePattern =
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
    numericPattern = /^([1-9][0-9]*)$/;

  // shift focus to "Arrival date" text box
  $("#arrival_date").focus();

  //event handler for the submit event of the form
  $("#reservation_form").submit((event) => {
    try {
      let l_isValid = true;

      // Initialize input values
      const l_arr_date = $("#arrival_date").val().trim(), // get and trim arrival date
        l_nights = $("#nights").val().trim(), // get and trim nights
        l_name = $("#name").val().trim(), // get and trim name
        l_email = $("#email").val().trim(), // get and trim email
        l_phone = $("#phone").val().trim(); // get and trim phone #

      // ---------  Arrival date Validation ---------
      if (l_arr_date == "" || l_arr_date == undefined || l_arr_date == null) {
        $("#arrival_date").next().text("This field is required.");
        l_isValid = false;
      } else if (!datePattern.test(l_arr_date)) {
        $("#arrival_date").next().text("Must be a valid date: mm/dd/yyyy.");
        l_isValid = false;
      } else {
        $("#arrival_date").next().text("");
      }
      $("#arrival_date").val(l_arr_date); // set trimed value in arrival date

      // ---------  Nights Validation ---------
      if (l_nights == "" || l_nights == undefined || l_nights == null) {
        $("#nights").next().text("This field is required.");
        l_isValid = false;
      } else if (!numericPattern.test(l_nights)) {
        $("#nights").next().text("Must be numeric and > 0.");
        l_isValid = false;
      } else {
        $("#nights").next().text("");
      }
      $("#nights").val(l_nights); // set trimed value in nights

      // --------- Name Validation ---------
      if (l_name == "" || l_name == undefined || l_name == null) {
        $("#name").next().text("This field is required.");
        l_isValid = false;
      } else {
        $("#name").next().text("");
      }
      $("#name").val(l_name); // set trimed value in name

      // ---------  Email Validation ---------
      if (l_email == "" || l_email == undefined || l_email == null) {
        $("#email").next().text("This field is required.");
        l_isValid = false;
      } else if (!emailPattern.test(l_email)) {
        $("#email").next().text("Must be a valid email address.");
        l_isValid = false;
      } else {
        $("#email").next().text("");
      }
      $("#email").val(l_email); // set trimed value in email

      //  ---------  Phone# Validation ---------
      if (l_phone == "" || l_phone == undefined || l_phone == null) {
        $("#phone").next().text("This field is required.");
        l_isValid = false;
      } else if (!phonePattern.test(l_phone)) {
        $("#phone").next().text("Must be valid: 111-111-1111.");
        l_isValid = false;
      } else {
        $("#phone").next().text("");
      }
      $("#phone").val(l_phone); // set trimed value in phone number

      //Cancel submission if violation
      if (l_isValid == false) {
        event.preventDefault();
      }
    } catch (e) {
      alert("Something went wrong. Please contact system administrator.");
      event.preventDefault();
    }
  }); // end submit
}); // end ready

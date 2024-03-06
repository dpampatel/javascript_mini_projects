"use strict";

$(document).ready(() => {
  try {
    // retriving information from session storage
    let l_email = sessionStorage.getItem("email"),
      l_phone = sessionStorage.getItem("phone"),
      l_postal = sessionStorage.getItem("postal"),
      l_dob = sessionStorage.getItem("dob");

    // check if information present in session storage
    if (l_email && l_phone && l_postal && l_dob) {
      // set value in span
      $("#email").text(l_email);
      $("#phone").text(l_phone);
      $("#postal").text(l_postal);
      $("#dob").text(l_dob);
    }

    $("#back").click(() => {
      history.back(); // to go back to index.html
    }); // end of click()
  } catch (e) {
    alert("Something went wrong. Please contact system administrator.");
  }
}); // end of ready()

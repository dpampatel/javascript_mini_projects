"use strict";
$(document).ready(() => {
  //calling widget method accordian using faqs component

  $("#faqs").accordion({
    event: "click", // expand collapse on h3 click
    heightStyle: "content", // panel height based on content height
    collapsible: true,
  });

  /* 3. Comment out everything within the ready() event handler.
  
  $("#faqs h2").click((evt) => {
    const h2 = evt.currentTarget;
    $(h2).toggleClass("minus");
    if ($(h2).attr("class") !== "minus") {
      $(h2).next().hide();
    } else {
      $(h2).next().show();
    }
    evt.preventDefault();
  });
  $("#faqs").find("a:first").focus();
  */
});

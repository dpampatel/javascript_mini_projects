"use strict";

const expandCollapse = (evt) => {
  try {
    //defining click event handler for show more/less
    evt.preventDefault(); // prevent default linking action
    const l_link = evt.currentTarget, // storing clicked link in constant
      l_div = $(l_link).prev(); // get previous hidden div

    l_div.toggleClass("hide"); // add remove "hide class from div"
    let l_class = l_div.attr("class"); // get current class of div
    if (l_class.indexOf("hide") > -1) {
      // update text
      $(l_link).text("Show more ▼");
    } else {
      $(l_link).text("Show less ▲");
    }
  } catch (e) {
    alert("Something went wrong. Please contact system administrator");
  }
};

$(document).ready(() => {
  // ready event handler
  $("#jdom a").click(expandCollapse); // binding click event with the link
});

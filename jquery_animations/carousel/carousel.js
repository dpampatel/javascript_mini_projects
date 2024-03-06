"use strict";

const activateImage = (evt) => {
  try {
    // click event handler for <a> elements
    evt.preventDefault(); // prevent default action
    $("#carousel").css({ opacity: 0.3, "pointer-events": "none" }); // disable book selection during animation
    const l_selection = evt.currentTarget,
      l_imgUrl = $(l_selection).attr("href"), // get the url of image to be displayed
      l_currentImg = $("#image");

    $("#image_list li a img").removeClass("cls-selected-img"); // remove selection border
    $(l_selection).children("img").addClass("cls-selected-img"); // apply selection border

    $(l_currentImg).animate(
      { opacity: 0, "margin-left": "-=205" },
      1000,
      () => {
        // callback to set image and reverse animation

        let l_alt = $(l_selection).children("img").attr("alt"); // get alt msg of selected image
        l_currentImg.attr("src", l_imgUrl); // changing large image
        l_currentImg.attr("alt", l_alt); // set alt in large image
        $(l_currentImg).animate(
          { opacity: 1, "margin-left": "+=205" },
          1000,
          () => {
            // callback to enable book selection
            $("#carousel").css({ opacity: 1, "pointer-events": "" });
          }
        );
      }
    );
  } catch (e) {
    alert("Something went wrong. Please contact system adminstrator.");
  }
};

$(document).ready(() => {
  const l_smallImgLink = $("#image_list a");
  $(l_smallImgLink).click(activateImage); // binding click event

  const slider = $("#image_list"); // slider = ul element
  let leftProperty = 0;
  let newLeftProperty = 0;

  // the click event handler for the right button
  $("#right_button").click(() => {
    // get value of current left property
    leftProperty = parseInt(slider.css("left"));

    // determine new value of left property
    if (leftProperty - 300 <= -900) {
      newLeftProperty = 0;
    } else {
      newLeftProperty = leftProperty - 300;
    }

    // use the animate function to change the left property
    slider.animate({ left: newLeftProperty }, 1000);
  }); // end click

  // the click event handler for the left button
  $("#left_button").click(() => {
    // get value of current right property
    leftProperty = parseInt(slider.css("left"));

    // determine new value of left property
    if (leftProperty < 0) {
      newLeftProperty = leftProperty + 300;
    } else {
      newLeftProperty = 0;
    }

    // use the animate function to change the left property
    slider.animate({ left: newLeftProperty }, 1000);
  }); // end click
}); // end ready

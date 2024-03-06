"use strict";

const g_error = "Something went wrong. Please contact system administrator.";
const getCookieByName = (name) => {
  try {
    const cookies = document.cookie;
    let l_start = cookies.indexOf(name + "="),
      l_end;
    if (l_start == -1) {
      // if index not found, no cookie available
      return ``;
    } else {
      l_start += name.length + 1; // incrementing for next search
      let l_end = cookies.indexOf(";", l_start);
      // ; is end of cookie ; in value is safe since encoded
      if (l_end == -1) {
        l_end = cookies.length; // if ; not found
      }
      const cookieValue = cookies.substring(l_start, l_end); // fetch cookie
      return decodeURIComponent(cookieValue); // decode since encoded
    }
  } catch (l_error) {
    alert(g_error);
  }
};

const setCookie = (name, value, days) => {
  try {
    let l_age = "",
      l_value = encodeURIComponent(value); //encoding for characters like commas
    // if days present create cookie along with its age
    if (days) {
      l_age = `; max-age=" + ${days * 24 * 60 * 60}`;
    }
    // appending adding path before creating cookie
    document.cookie = `${name} = ${l_value} ${l_age}; path=/`;
  } catch (l_error) {
    alert(g_error);
  }
};

const deleteCookie = (name) => {
  try {
    //setting "" value and age 0
    document.cookie = `${name}=''; max-age=0; path=/`;
  } catch (l_error) {
    alert(g_error);
  }
};

const goToPage = (url) => {
  try {
    location.href = url; // switch html page
  } catch (l_error) {
    alert(g_error);
  }
};

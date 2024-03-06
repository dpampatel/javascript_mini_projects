"use strict";

const g_error = "Something went wrong. Please contact system administrator.";
$(document).ready(() => {
  try {
    const tasks = [];

    $("#add_task").click(() => {
      try {
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
          alert("Please enter a task.");
          textbox.focus();
        } else {
          // add task to array

          tasks.push(...task.split(","));
          /* Using .split to seperate tasks and
            ES6 spread operator instead of loop to push into array */

          tasks.forEach((item, index) => {
            tasks[index] = tasks[index].trim();
          });
          // trim tasks

          // clear task text box and re-display tasks
          textbox.val("");
          $("#task_list").val(tasks.join("\n"));
          textbox.focus();
        }
      } catch (err) {
        alert(g_error);
      }
    });

    $("#clear_tasks").click(() => {
      tasks.length = 0;
      $("#task_list").val("");
      $("#task").focus();
    });

    $("#task").focus();
  } catch (error) {
    alert(g_error);
  }
});

"use strict";

$(document).ready(function () {
  // stopwatch
  const l_stopwatch = createStopwatch(
    $("#s_minutes"),
    $("#s_seconds"),
    $("#s_ms")
  );
  // attaching handlers
  $("#start").click(l_stopwatch.start);
  $("#stop").click(l_stopwatch.stop);
  $("#reset").click(l_stopwatch.reset);

  //start clock
  createClock($("#hours"), $("#minutes"), $("#seconds"), $("#ampm")).start();
}); // end ready()

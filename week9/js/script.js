"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let tarot;
$(document).ready(setup);
function setup() {
  $.getJSON("assets/data/tarot_interpretations.json")
    .done(tarotLoaded) // Call tarotLoaded on successful load
    .fail(tarotNotLoaded); // Call tarotNotLoaded on failed load
}
function tarotLoaded(data) {
  tarot = data;
  console.log(tarot);
}
function tarotNotLoaded(jqxhr, textStatus, error) {
  console.error(error);
}

"use strict";

$(document).ready(setup);

//variables for ojur secrets
let secretsFound = 0;
let totalSecrets;

function setup() {
  //will re-hide spans every 500 frames
  setInterval(update, 500);

  console.log($('.secret').length)
}

function update(){
  $('span').each(updateSpan);
  //will call on the span removing on click
  $('span').mousedown(spanClicked);
}

function updateSpan(){
  let r = Math.random();

  //will revert the opened span boxes back to normal at a certain percent
  if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
//removes spans on click
function spanClicked(){
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}
/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

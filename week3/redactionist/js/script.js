"use strict";

$(document).ready(setup);

function setup() {
  setInterval(update, 500);
}

function update(){
  $('span').each(updateSpan);
  $('span').mousedown(spanClicked);
}

function updateSpan(){
  let r = Math.random();

  if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

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

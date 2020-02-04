"use strict";

$(document).ready(setup);

//variables for ojur secrets
let secretsFound = 0;
let totalSecrets;

//our garbage bin
let $bin;
//our crap words
let $found;

function setup() {
  //will re-hide spans every 500 frames
  setInterval(update, 500);

  console.log($('.secret').length);

  //where we'll drop our crap words
  $bin = $('h1');
  // Make it droppable
  $bin.droppable({
    // The drop option specifies a function to call when a drop is completed
    drop: onDrop
  });

  $found = $('#found');
  $found.draggable();

  //will call our spanClicked function when clicking on specific boxes
  $('span').on('click', spanClicked);

  totalSecrets = $('.secret').length;
  $('#totalSecrets').text(totalSecrets);
  //adds an event to mouseover for all secrets
  $('.secret').on('mouseover', discoveredSecrets);
}

function update(){
  // $('span').each(updateSpan);

  //will call on the span removing on click
  $('span').mousedown(spanClicked);
}
//
// function updateSpan(){
//   let r = Math.random();
//
//   //will revert the opened span boxes back to normal at a certain percent
//   if (r < 0.1) {
//     $(this).removeClass('redacted');
//     $(this).addClass('revealed');
//   }
// }
//removes spans on click
function spanClicked(){
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

//function used to display and count up all the total secrets on page
function discoveredSecrets(){
  $(this).addClass('found');
  $(this).off('mouseover');
  secretsFound += 1;
  //shows the total amount of secrets found
  $('#foundSecrets').text(secretsFound);
}
/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

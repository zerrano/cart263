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
  $bin = $('img');
  // Make it droppable
  $bin.droppable({
    // The drop option specifies a function to call when a drop is completed
    drop: onDrop
  });

  $found = $('.secret');
  $found.draggable();

  //will call our spanClicked function when clicking on specific boxes
  $('.secret').on('click', spanClicked);

  totalSecrets = $('.secret').length;
  $('#totalSecrets').text(totalSecrets);
  //adds an event to mouseover for all secrets
  $('.secret').on('mouseover', discoveredSecrets);
}

function update(){

  //will call on the span removing on click
  $('span').mousedown(spanClicked);
}

//function for deleting our dragged elements
function onDrop(event, ui) {

  ui.draggable.remove();

  $(this).attr('h1');
}

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

//Our basic timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          //reloads the page when the countdown hits 0
            location.reload();
        }
    }, 1000);
}

window.onload = function () {
    let deathCount = 30 * 1,
        display = document.querySelector('#time');
    startTimer(deathCount, display);
};
/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

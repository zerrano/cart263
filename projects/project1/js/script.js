"use strict";

$(document).ready(setup);

//variables for our secrets
let secretsFound = 0;
let totalSecrets;

//our garbage bin
let $bin;
//our crap words
let $found;
//our sound effects
const selected = new Audio("assets/sounds/honk.wav");
const burn = new Audio("assets/sounds/fire.wav");
const beep = new Audio("assets/sounds/beep.wav");
const start = new Audio("assets/sounds/start.wav");


function setup() {
  //will re-hide spans every 500 frames
  setInterval(update, 500);
  start.currentTime=0;
  start.play();
  console.log($('.secret').length);

  //where we'll drop our crap words
  $bin = $('img');
  // Make it droppable
  $bin.droppable({
    // The drop option specifies a function to call when a drop is completed
    drop: onDrop
  });

  $found = $('.secret');
  $found.draggable(

  );

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

  //deletes words
  ui.draggable.remove();
  //plays burn track on deletion
  burn.currentTime=0;
  burn.play();

  $(this).attr('h1');
  //adds points to words deleted
  secretsFound += 1;
  //shows the total amount of secrets found
  $('#foundSecrets').text(secretsFound);
}

//draggable elements
function spanClicked(){
  $(this).removeClass('revealed');
  $(this).addClass('redacted');

  selected.currentTime=0;
  selected.play();
}

//function used to display and count up all the total secrets on page
function discoveredSecrets(){
  $(this).addClass('found');
  $(this).off('mouseover');
  beep.currentTime = 0;
  beep.play();
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

The Endless Paradox
Timothy Serrano

Welcome to the paradox prison. As the gong rings, you must burn as many words as the paradox asks for.
If you do not burn enough words by the time the timer hits 0, then the gong will ring once more, and time will reset.
Aka, if you don't drag as many descovered words into the flame, the game refreshes.

*********************************************************************/

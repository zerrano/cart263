"use strict";

let $mouth;
let $fly;
const buzz = new Audio("assets/sounds/buzz.mp3");
const crunch = new Audio("assets/sounds/crunch.wav");

$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!
  $fly = $('#fly');
  $mouth = $('#mouth');


  $('#fly').draggable ({
    start: buzz,
    stop: unbuzz,
  });


  $( "#mouth" ).droppable({
  drop: onDrop
});


  }

  function buzz(){
    buzz.loop = true;
    buzz.play();
  }

  function onDrop(){
    $fly.remove();

    $(this).attr('src', 'assets/images/mouth-closed.png');

    setInterval(chew, 250);
    };


  function chew() {
    //  [give the attribute to scan] [.attr will scan the attribute that is defined ->]
    if ($mouth.attr('src') === 'assets/images/mouth-open.png') {

  $mouth.attr('src', 'assets/images/mouth-closed.png');
  }

    else {
      $mouth.attr('src', 'assets/images/mouth-open.png');
    }
}
/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

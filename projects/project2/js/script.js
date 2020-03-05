/********************************************************************

Glitch TV Slaves
Timothy Serrano

If you're familiar with the huge streaming platform Twitch, then this name/concept should be of no surprise.
Twitch is a platform where content creators live stream their content and interact with viewers in real time.
Viewers are often encouraged to donate to their favourite streamers in order for them to continue to live off of the
platform. It is a rough platform where you must dance for your audience in order to live. This project is dedicated
to be a brutalist satire presentation of how the twitch life is like, and how it can be hard, as well as what viewing
twitch as a curious youth can feel like.

HOW TO PLAY: By clicking the "subcribe button" in the middle of the screen, it creates an array of credit card images
to spawn at the top of the screen. Afterwards, if you say "I subscribed", then the subscribe button will suck up
all of the spawned credit cards and consume them.
*********************************************************************/

"use strict";

$(document).ready(setup);

//Our Array to generate credit cards
let creditImageArray = ['creditcard1.png', 'creditcard2.png', 'creditcard3.png']


function setup() {

  //our subscribe button
  subscribe();
  //giving our subscribe button an onclick function
  let $subscribed = $('#subscribed');
  $subscribed.on('click', creditCard)
}


//Array to handle our credit card images
function creditCard() {
  //console log to verify our button clicks
  console.log('clicked!');


  let $message = $("#hidden");
  //makes a hidden message appear on screen
  $('b').css("color", "red");
  $message.css("opacity", "1");
  //array to generate credit cards on clicking the subscribe button
  for (let i = 0; i < 15; i++) {

    let $creditImage = $("<img>");

    //randomly generates credit cards from 3 differnt pngs
    let randomIndex = Math.floor(Math.random() * creditImageArray.length)
    $creditImage.attr("src", "../assets/images/" + creditImageArray[randomIndex]);
    $creditImage.css("top", "10px");
    //spawns them randomly at the top of the screen randomly on the x-axis
    let randomX = Math.random() * window.innerWidth;
    $creditImage.css("left", randomX + "px");
    $creditImage.addClass('credit');
    $('body').append($creditImage);

    //when our credit cards spawn, they will animate tot he bottom of the screen
    let randomSpeed = (Math.random() * 2500)+(Math.random()* 500);
    let distToBottom = window.innerHeight-80;
    $creditImage.animate({top:"+="+distToBottom}, randomSpeed);
  }


}

//annyang function for the subscribe feature, should delete all credit cards when saying "I subscribed"
function subscribe() {
  if (annyang) {
    let subscribe = {
      'I subscribed': function() {
        console.log('THANK YOU FOR SUBSCRIBING WOW');

        //after saying "I subscribed", all spawned elements get animated back to the top of the screen
        let randomSpeed = (Math.random() * 2500)+500;
        let distToBottom = window.innerHeight+50;
        $('.credit').animate({top:"-="+distToBottom}, randomSpeed);
        let randomRGB = Math.random() * 255;
        $('h1').css("color", randomRGB, 150, 200);

        // $('.credit').remove();
      }
    };
    annyang.addCommands(subscribe);
    annyang.start();
  }


}

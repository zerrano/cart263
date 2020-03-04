/********************************************************************

Glitch TV Slaves
Timothy Serrano

If you're familiar with the huge streaming platform Twitch, then this name/concept should be of no surprise.
Twitch is a platform where content creators live stream their content and interact with viewers in real time.
Viewers are often encouraged to donate to their favourite streamers in order for them to continue to live off of the
platform. It is a rough platform where you must dance for your audience in order to live. This project is dedicated
to be a brutalist satire presentation of how the twitch life can be hard, as well as what viewing twitch as a curious
youth can feel like.

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

function creditCard() {
  //console log to verify our button clicks
  console.log('clicked!');

  //array to generate credit cards on clicking the subscribe button
  for (let i = 0; i < 15; i++) {

    let $creditImage = $("<img>");

    let randomIndex = Math.floor(Math.random() * creditImageArray.length)
    $creditImage.attr("src", "../assets/images/" + creditImageArray[randomIndex]);
    $creditImage.css("top", "10px");
    let randomX = Math.random() * window.innerWidth;
    $creditImage.css("left", randomX + "px");
    $creditImage.addClass('credit');
    $('body').append($creditImage);
  }
}

//annyang function for the subscribe feature

function subscribe() {
  if (annyang) {
    let subscribe = {
      'I subscribed': function() {
        console.log('THANK YOU FOR SUBSCRIBING WOW');
      }
    };
    annyang.addCommands(subscribe);
    annyang.start();
  }


}

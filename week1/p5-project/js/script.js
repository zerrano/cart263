"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let clownImg;
let bark;

let clown = {
  x: 0,
  y: 0,
  vx: 5,
  vy: 5,
  image: null,
  tint: undefined
}
// preload()
//
// Description of preload

function preload() {
  clownImg = loadImage('assets/images/clown.png');
  bark = loadSound('assets/sounds/bark.wav');
}


// setup()
//
// Description of setup

function setup() {
  createCanvas(700,500);

  clown.image = clownImg;

  clown.x = width / 2;
  clown.y = height / 2;
}


// draw()
//
// Description of draw()

function draw() {

background(255);
}

function mousePressed(){
  bark.play();
}

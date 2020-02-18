"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const frequencies = [
  110.00,
  123.47,
  138.59,
  146.83,
  164.81,
  185.00,
  207.65
];

let synth = new Pizzicato.Sound({
    source: 'wave'
});
let kick = new Pizzicato.sound('assets/sounds/kick.wav');
let snare = new Pizzicato.sound('assets/sounds/snare.wav');
let hihat = new Pizzicato.sound('assets/sounds/hihat.wav');

let pattern = [
  "x", "", "o", "*", "x", "", "o*", "*"
];

function setup(){

}

function mousePressed(){
  setInterval(playNote, 400)
}
function playNote() {
  let note = frequencies[Math.floor(Math.random() * frequencies.length)];

  synth.frequency = note;
  synth.play();
}

function playDrum() {
  let symbols = pattern[beat];
  if(symbols.includes('x')) {
    kick.play();
  }

  if (symbols.includes('o')){
    snare.play();
  }

  if(symbols.includes('*')) {
    hihat.play();
  }

  beat++;
  if (beat >= pattern.length) {
    beat = 0;
  }
}

"use strict";

window.onload = setup;

//global variable for rotation
let rotation = 0;

function setup() {

//Fair warning, since I increased the max amount of pixels to 7000, it may lag during rotation.
  for (let i =0; i < 7000; i++) {
    //scans what is going to be duplicated
    let pixel = document.createElement('div');
    //gives the div that was duplicated, the proper class and attributes
    pixel.setAttribute('class', 'pixel');
    //each pixel that gets created will be able to be scanned individually now
    document.addEventListener('mouseover', paint);
    //event listenner for detecting arrow key rotations
    document.addEventListener('keydown', rotate);
    //event listenner for clicking/deleting pixels on mouse press
    document.addEventListener('click', remove);

    //pushes the completed copy onto the page
    document.body.appendChild(pixel);

  }
  console.log("The page has loaded! Ready to fire.");

}

function paint(e) {
//will detect a div with the pixel class
let pixel = e.target;
let randomness = Math.random()*250;
//will change its color to blue based on the pixel it is hovering over
pixel.style.backgroundColor = 'rgb('+ randomness+','+randomness+','+randomness+ ')';
//timer to reset the pixel after a set amount of time
setTimeout(resetPixel, 1000, pixel);
}

//resets the background back to default (crimson)
function resetPixel(pixel){
  pixel.style.backgroundColor = 'crimson';
}

//detects every single div with the class of pixel
function rotate(e){
  let pixels = document.getElementsByClassName('pixel');

  //keycode for right arrow key is 39
  if (e.keyCode === 39) {
    rotation += 1;
    for(let i = 0; i < pixels.length; i++) {
      pixels[i].style.transform = `rotate(${rotation}deg)`;
    }
  }

  //keycode for left arrow key is 39
  if (e.keyCode === 37) {
    rotation -= 1;
    for(let i = 0; i < pixels.length; i++) {
      pixels[i].style.transform = `rotate(${rotation}deg)`;
    }
  }
}

//on mouse click, set opacity to 0 so that it appears deleted
//works for a few pixels before making the entire canvas blank for some reason
function remove(e){

  let pixel = e.target;
  pixel.style.opacity = "0";
}

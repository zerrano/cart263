"use strict";

window.onload = setup;


function setup() {

  for (let i =0; i < 7000; i++) {
    //scans what is going to be duplicated
    let pixel = document.createElement('div');
    //gives the div that was duplicated, the proper class and attributes
    pixel.setAttribute('class', 'pixel');
    //each pixel that gets created will be able to be scanned individually now
    pixel.addEventListener('mouseover', paint);

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

function resetPixel(pixel){
  pixel.style.backgroundColor = 'crimson';
}

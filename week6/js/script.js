"use strict";

/*****************

Serrano tim

assignment 3, week 6
Started assignment 3 straight from Pippin's work file on the assignment page.

Uses:

ResponsiveVoice
https://responsivevoice.org/

Animal names from:
https://github.com/dariusk/corpora/blob/master/data/animals/common.json

******************/

// An array of animal names that we use to create our guessing game
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

// We need to track the correct button for each round
let $correctButton;
// We also track the set of buttons
let buttons = [];
// How many possible answers there are per round
const NUM_OPTIONS = 5;

//variable for the correct answers
let correctAnimal;
//voice commands
//voice command to give up
let sayGiveUp = {
  'I give up': giveUp
};
//voice command to say it again

// Get setup!
$(document).ready(setup);

// setup()
//
// We just start a new round right away!
function setup() {
  newRound();
  //command to start up annyang
  if (annyang) {

  //annyang commands
  annyang.addCommands(sayGiveUp);

  //begin annyang
  annyang.start();
  }

}
//function for giveUp when called
function giveUp() {
  console.log("You actually gave up?");

  let $div = $('div');
  $div.each(showAnswer);
}

//function for showAnswer when initiated from another function
function showAnswer(){
  if ($(this).text() === correctAnimal) {
    $(this).effect('shake');
    setTimeout(eraseGuess, 500);
    setTimeout(newRound, 1200);
  }
}

// newRound()

function newRound() {
  // We empty the buttons array for the new round
  buttons = [];
  // Loop for each option we'll offter
  for (let i = 0; i < NUM_OPTIONS; i++) {
    // Choose the answer text randomly from the animals array
    let answer = getRandomElement(animals);
    // Add a button with this label
    let $button = addButton(answer);
    // Add this button to the buttons array
    buttons.push($button);
  }
  // Choose a random button from the buttons array as our correct button
  $correctButton = getRandomElement(buttons);
  // Say the label (text) on this button
  sayBackwards($correctButton.text());
}

// sayBackwards(text)

function sayBackwards(text) {

  let backwardsText = text.split('').reverse().join('');

  // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };

  // Use ResponsiveVoice to speak the string we generated, with UK English Male voice
  // and the options we just specified.
  responsiveVoice.speak(backwardsText, 'UK English Male', options);
}

// addButton(label)

function addButton(label) {
  // Create a div with jQuery using HTML
  let $button = $('<div></div>');
  // Give it the guess class
  $button.addClass("guess");
  // Set the text in the div to our label
  $button.text(label);
  // Turn the div into a button using jQuery UI's .button() method
  $button.button();
  // Listen for a click on the button which means the user has guessed
  $button.on('click', handleGuess);
  // Finally, add the button to the page so we can see it
  $('body').append($button);
  // Return the button
  return $button;
}

// handleGuess()

function handleGuess() {
  // If the button they clicked on has the same label as
  // the correct button, it must be the right answer...
  if ($(this).text() === $correctButton.text()) {
    // Remove all the buttons
    $('.guess').remove();
    // Start a new round
    setTimeout(newRound, 1000);
  }
  else {
    // Otherwise they were wrong, so shake the clicked button
    $(this).effect('shake');
    // And say the correct animal again to "help" them
    sayBackwards($correctButton.text());
  }
}

// getRandomElement(array)
//
// Returns a random element from the provided array
function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

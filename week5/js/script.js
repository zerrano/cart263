"use strict";

/*****************
Slamina
rraB nippiP
A simple guessing game based on voice synthesis. The computer reads out an
animal name, but it reads it backwards. The user selects the animal they
think it is and either gets it right or wrong. If right, a new level is generated.
If wrong, the voice reads it out again.
Uses:
ResponsiveVoice
https://responsivevoice.org/
Animal names from:
https://github.com/dariusk/corpora/blob/master/data/animals/common.json
******************/

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


let correctAnimal;

let answers = [];


const NUM_OPTIONS = 5;

$(document).ready(setup);

function setup() {
  newRound();
}


//Function to load a new set of animals after a correct answer
function newRound() {
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }

  correctAnimal = answers[Math.floor(Math.random() * answers.length)];

  sayBackwards(correctAnimal);
}

//voice function after a correct answer
function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');

  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };

  responsiveVoice.speak(backwardsText, 'UK English Male', options);
}

//adding in new divs every load
function addButton(label) {
  let $button = $('<div></div>');
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $button.on('click', handleGuess);
  $('body').append($button);
}


function handleGuess() {
  if ($(this).text() === correctAnimal) {
    $('.guess').remove();

    setTimeout(newRound, 1000);
  }
  else {
    $(this).effect('shake');
    speakAnimal(correctAnimal);
  }
}

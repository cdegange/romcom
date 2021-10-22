<<<<<<< HEAD
// Create variables targetting the relevant DOM elements here 👇
var getRandomCoverButton = document.querySelector(".random-cover-button")
=======
// Create variables targetting the relevant DOM elements here :point_down:

var getRandomCoverButton = document.querySelector(".random-cover-button")
var currentImage = document.querySelector(".cover-image");
<<<<<<< HEAD
/// i think follow this guideline for the rest of the classes
>>>>>>> main
=======
var currentTitle = document.querySelector(".cover-title");
var currentTag1 = document.querySelector(".tagline-1");
var currentTag2 = document.querySelector(".tagline-2");

var makeCoverButton = document.querySelector(".view form-view hidden");
>>>>>>> main

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

<<<<<<< HEAD
<<<<<<< HEAD
// Add your event listeners here 👇

getRandomCoverButton.addEventListener("click", createRandomCover)

// Create your event handlers and other functions here 👇

=======
// Add your event listeners here :point_down:
getRandomCoverButton.addEventListener("click", createRandomCover)
>>>>>>> main
=======

// Add your event listeners here :point_down:
window.addEventListener("load", createRandomCover);
getRandomCoverButton.addEventListener("click", createRandomCover);

makeCoverButton.addEventListener("click", hideAndShow);
>>>>>>> main

// Create your event handlers and other functions here :point_down:
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover() {
  var newCover = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newTagline1 = descriptors[getRandomIndex(descriptors)];
  var newTagline2 = descriptors[getRandomIndex(descriptors)];
<<<<<<< HEAD

  currentCover = new Cover(newCover, newTitle, newTagline1, newTagline2);
}

currentCover = document.querySelector(".cover-image");
=======
  var cover = new Cover(newCover, newTitle, newTagline1, newTagline2);
  currentImage.src = cover.cover;
  currentTitle.innerText = cover.title;
  currentTag1.innerText = cover.tagline1;
  currentTag2.innerText = cover.tagline2;
}
<<<<<<< HEAD
>>>>>>> main
=======

function hideAndShow() {
  
}

// 1. create a variable targeting make your own cover button
// 2. when button is clicked, the homepage view should be hidden and the
// create your own cover form should be shown - create event listener and function
// 3. when the click happens, the show new random cover and save cover buttons should be hidden -
// 4. home button should still be visible
// 5. set up event listener for view saved covers button
// 6.
>>>>>>> main

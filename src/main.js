// Create variables targetting the relevant DOM elements here 👇
var getRandomCoverButton = document.querySelector(".random-cover-button")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

getRandomCoverButton.addEventListener("click", createRandomCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover() {
  var newCover = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newTagline1 = descriptors[getRandomIndex(descriptors)];
  var newTagline2 = descriptors[getRandomIndex(descriptors)];

  currentCover = new Cover(newCover, newTitle, newTagline1, newTagline2);


    console.log(currentCover);
}

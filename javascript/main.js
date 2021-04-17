// get the data you will use [1]    first
var sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);

//get number of slideimage
var slideCount = sliderImage.length; // = 5

// set current slide
var currentSlide = 1;

// slide number element

var slideNumberElement = document.getElementById("slide-number");

// prev and next button
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
// handel click button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// secound
// create the main element [ul li] pagination

var paginationElement = document.createElement("ul");
// set id for new created element
paginationElement.setAttribute("id", "pagination-ul");
// create list based on length of slideImage

for (var i = 1; i <= slideCount; i++) {
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
// put the created on the div in html
document.getElementById("indicartors").appendChild(paginationElement);
var paginationCreatedUl = document.getElementById("pagination-ul");
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
// trigger thechecker fun

theChecker();
// next and prev button fun
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
// part 3
// get the created ul

// the main funcation 'the checker'

function theChecker() {
  // 1 slide number element (in the head of the slider)
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slideCount;
  removeAllActive();
  // set active class in current slide
  sliderImage[currentSlide - 1].classList.add("active");
  // set active class in current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // check if the cruunet slide is the first
  if (currentSlide == 1) {
    // desable class in prev
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == slideCount) {
    // desable class in prev
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes

function removeAllActive() {
  sliderImage.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationBullets.forEach(function (bullets) {
    bullets.classList.remove("active");
  });
}
